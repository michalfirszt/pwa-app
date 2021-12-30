import QrScanner from 'qr-scanner';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const QrCodeScanner = () => {
  const [decodedCodeValue, setDecodedCodeValue] = useState(null);
  const [videoSize, setVideoSize] = useState(0);

  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);

  const handleScannerStart = useCallback(() => {
    if (qrScannerRef.current) {
      qrScannerRef.current?.start().then(() => {
        setVideoSize(400);
      });
    }
  }, []);

  const handleScannerStop = useCallback(() => {
    if (qrScannerRef.current) {
      qrScannerRef.current?.stop();
      setVideoSize(0);
    }
  }, []);

  const handleOnDecode = useCallback((decodedValue) => {
    setDecodedCodeValue(decodedValue);
  }, []);

  useEffect(() => {
    qrScannerRef.current = new QrScanner(videoRef.current, handleOnDecode);

    return () => {
      qrScannerRef.current?.destroy();
    };
  }, [handleOnDecode]);

  return (
    <div data-testid="qr-code-scanner">
      <div>
        <button onClick={handleScannerStart}>Start</button>
        <button onClick={handleScannerStop}>Stop</button>
      </div>
      <div>
        {decodedCodeValue && (
          <div>
            <h3>Scanned data:</h3> {decodedCodeValue}
          </div>
        )}
      </div>
      <div>
        <video ref={videoRef} height={videoSize} width={videoSize} />
      </div>
    </div>
  );
};

export default QrCodeScanner;
