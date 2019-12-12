信号处理操作。

See the [tf.signal](https://tensorflow.org/api_guides/python/contrib.signal)guide.

## 功能
[ `dct(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/dct): Computes the 1D [Discrete Cosine Transform (DCT)][dct] of  `input` .

[ `fft(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/fft): Fast Fourier transform.

[ `fft2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/fft2d): 2D fast Fourier transform.

[ `fft3d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/fft3d): 3D fast Fourier transform.

[ `fftshift(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/fftshift): Shift the zero-frequency component to the center of the spectrum.

[ `frame(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/frame): Expands  `signal` 's  `axis`  dimension into frames of  `frame_length` .

[ `hamming_window(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/hamming_window): Generate a [Hamming](https://en.wikipedia.org/wiki/Window_function#Hamming_window) window.

[ `hann_window(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/hann_window): Generate a [Hann window](https://en.wikipedia.org/wiki/Window_function#Hann_window).

[ `idct(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/idct): Computes the 1D [Inverse Discrete Cosine Transform (DCT)][idct] of  `input` .

[ `ifft(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/ifft): Inverse fast Fourier transform.

[ `ifft2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/ifft2d): Inverse 2D fast Fourier transform.

[ `ifft3d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/ifft3d): Inverse 3D fast Fourier transform.

[ `ifftshift(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/ifftshift): The inverse of fftshift.

[ `inverse_stft(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/inverse_stft): Computes the inverse [Short-time Fourier Transform](https://en.wikipedia.org/wiki/Short-time_Fourier_transform) of  `stfts` .

[ `inverse_stft_window_fn(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/inverse_stft_window_fn): Generates a window function that can be used in  `inverse_stft` .

[ `irfft(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/irfft): Inverse real-valued fast Fourier transform.

[ `irfft2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/irfft2d): Inverse 2D real-valued fast Fourier transform.

[ `irfft3d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/irfft3d): Inverse 3D real-valued fast Fourier transform.

[ `linear_to_mel_weight_matrix(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/linear_to_mel_weight_matrix): Returns a matrix to warp linear scale spectrograms to the [mel scale](https://en.wikipedia.org/wiki/Mel_scale).

[ `mfccs_from_log_mel_spectrograms(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/mfccs_from_log_mel_spectrograms): Computes [MFCCs](https://en.wikipedia.org/wiki/Mel-frequency_cepstrum) of  `log_mel_spectrograms` .

[ `overlap_and_add(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/overlap_and_add): Reconstructs a signal from a framed representation.

[ `rfft(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/rfft): Real-valued fast Fourier transform.

[ `rfft2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/rfft2d): 2D real-valued fast Fourier transform.

[ `rfft3d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/rfft3d): 3D real-valued fast Fourier transform.

[ `stft(...)` ](https://tensorflow.google.cn/api_docs/python/tf/signal/stft): Computes the [Short-time Fourier Transform](https://en.wikipedia.org/wiki/Short-time_Fourier_transform) of  `signals` .

