export const Text = (props) => {
  // eslint-disable-next-line react/prop-types
  const frist = props.frist;

  return (
    <div className="font-outfit px-2">
      {frist ? (
        <p className="text-Dark-Blue text-xl font-bold pb-2">Improve your front-end skills by building projects</p>
      ) : (
        <span className="text-Grayish-Blue">
          Scan ther QR code to visit frontend Mentor and take your coding skills
          to the next level
        </span>
      )}
    </div>
  );
}