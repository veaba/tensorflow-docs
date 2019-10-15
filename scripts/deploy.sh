#!/bin/bash
set -e
print_error(){
    echo -e "\e[31mERROR: ${1}\e[m"
}

# 部署仓库地址
if [ -n "${EXTERNAL_REPOSITORY}" ]; then
    PUBLISH_REPOSITORY=${EXTERNAL_REPOSITORY}
else
    PUBLISH_REPOSITORY=${GITHUB_REPOSITORY}
fi
# 检查 ACTIONS_DEPLOY_KEY

if [ -n "${ACTIONS_DEPLOY_KEY}" ]; then
    echo "开始安装: ACTIONS_DEPLOY_KEY ..."
    SSH_DIR="/root/.ssh"

    # 如果不存在则创建
    if [ ! -d "${SSH_DIR}"]; then
    sudo mkdir "${SSH_DIR}"
    else
        echo "已存在，则跳过~~~创建:${SSH_DIR}"
    fi 
    echo "111111"
    # TODO这里权限不足
    # echo `ssh-keyscan -t rsa github.com` > "${SSH_DIR}/known_hosts"
    echo "222222"
    # echo "${ACTIONS_DEPLOY_KEY}" >"${SSH_DIR}/id_rsa"
    echo "333333"
    chmod 400 "${SSH_DIR}/id_rsa"
    echo "444444"

    remote_repo="git@github.com:${PUBLISH_REPOSITORY}.git"
else
    ls
    print_error "没有发现：ACTIONS_DEPLOY_KEY 请配置"
    exit 1
fi

if [ -z "${PUBLISH_BRANCH}" ]; then
    print_error "没有发现：PUBLISH_BRANCH 要发布的分支"
    exit 1
fi

remote_branch=${PUBLISH_BRANCH}

cd "${PUBLISH_DIR}"
git init
git checkout --orphan "${remote_branch}"

# 配置git
git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"

# 更新提交
git add .
git commit -m "自动化部署：$(date)"

git remote -v
git branch -v
git push origin "${remote_branch}"

echo "发布完成！$(date)"

# 本脚本参考 https://github.com/peaceiris/actions-gh-pages/blob/master/entrypoint.sh
# if [ -n xx] 判断存在
# if [ -z oo] 应该是判断不存在
