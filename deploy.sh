#!/bin/bash

set -e
# set -ex

function print_error() {
    echo -e "\e[31mERROR: ${1}\e[m"
}

function print_info() {
    echo -e "\e[36mINFO: ${1}\e[m"
}

function skip() {
    print_info "No changes detected, skipping deployment"
    exit 0
}

# check values
if [ -n "${EXTERNAL_REPOSITORY}" ]; then
    PUBLISH_REPOSITORY=${EXTERNAL_REPOSITORY}
else
    PUBLISH_REPOSITORY=${GITHUB_REPOSITORY}
fi
print_info "Deploy to ${PUBLISH_REPOSITORY}"

if [ -n "${ACTIONS_DEPLOY_KEY}" ]; then

    print_info "setup with ACTIONS_DEPLOY_KEY"

    if [ -n "${SCRIPT_MODE}" ]; then
        print_info "run as SCRIPT_MODE"
        SSH_DIR="${HOME}/.ssh"
    else
        SSH_DIR="/root/.ssh"
    fi
    mkdir "${SSH_DIR}"
    ssh-keyscan -t rsa github.com > "${SSH_DIR}/known_hosts"
    echo "${ACTIONS_DEPLOY_KEY}" > "${SSH_DIR}/id_rsa"
    chmod 400 "${SSH_DIR}/id_rsa"

    echo "____________________"
    cat "${SSH_DIR}/known_hosts"
    echo "____________________"
    remote_repo="git@github.com:${PUBLISH_REPOSITORY}.git"

elif [ -n "${PERSONAL_TOKEN}" ]; then

    print_info "setup with PERSONAL_TOKEN"

    remote_repo="https://x-access-token:${PERSONAL_TOKEN}@github.com/${PUBLISH_REPOSITORY}.git"

elif [ -n "${GITHUB_TOKEN}" ]; then

    print_info "setup with GITHUB_TOKEN"
    print_error "GITHUB_TOKEN works only private repo, See #9"

    if [ -n "${EXTERNAL_REPOSITORY}" ]; then
        print_error "can not use GITHUB_TOKEN to deploy to a external repository"
        exit 1
    fi

    remote_repo="https://x-access-token:${GITHUB_TOKEN}@github.com/${PUBLISH_REPOSITORY}.git"

else
    print_error "not found ACTIONS_DEPLOY_KEY, PERSONAL_TOKEN, or GITHUB_TOKEN"
    exit 1
fi

if [ -z "${PUBLISH_BRANCH}" ]; then
    print_error "not found PUBLISH_BRANCH"
    exit 1
fi

if [ -z "${PUBLISH_DIR}" ]; then
    print_error "not found PUBLISH_DIR"
    exit 1
fi

remote_branch="${PUBLISH_BRANCH}"

local_dir="${HOME}/ghpages_${RANDOM}"
if git clone --depth=1 --single-branch --branch "${remote_branch}" "${remote_repo}" "${local_dir}"; then
    cd "${local_dir}"

    if [[ ${INPUT_KEEPFILES} == "true" ]]; then
        print_info "Keeping existing files: ${INPUT_KEEPFILES}"
    else
        git rm -r --ignore-unmatch '*'
    fi

    find "${GITHUB_WORKSPACE}/${PUBLISH_DIR}" -maxdepth 1 | \
        tail -n +2 | \
        xargs -I % cp -rf % "${local_dir}/"
else
    cd "${PUBLISH_DIR}"
    git init
    git checkout --orphan "${remote_branch}"
fi

# push to publishing branch
git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"
git remote rm origin || true
git remote add origin "${remote_repo}"
git add --all

print_info "Allowing empty commits: ${INPUT_EMPTYCOMMITS}"
COMMIT_MESSAGE="Automated deployment: $(date -u) ${GITHUB_SHA}"
if [[ ${INPUT_EMPTYCOMMITS} == "false" ]]; then
    git commit -m "${COMMIT_MESSAGE}" || skip
else
    git commit --allow-empty -m "${COMMIT_MESSAGE}"
fi

git push origin "${remote_branch}"
print_info "${GITHUB_SHA} was successfully deployed"