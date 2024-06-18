import { Text } from "../Text";
import qrcode from "../../../public/images/image-qr-code.png"

export const Card = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-72 drop-shadow-2xl rounded-2xl bg-White p-3">
        <div className="rounded-2xl pb-4">
          <img
            className="rounded-2xl"
            src={qrcode}
            alt="Blue QR code"
          />
        </div>
        <div className="pb-3 flex flex-col text-center">
          <Text frist={true} />
          <Text frist={false} />
        </div>
      </div>
    </div>
  );
};
