import { Audio } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="rgb(154, 205, 50)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
      />
    </>
  );
};
