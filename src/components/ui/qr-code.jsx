import React from "react";
import { QRCodeCanvas } from "qrcode.react";

export const QrCode = ({ value }) => {
  return <QRCodeCanvas value={value} size={256} />;
};
