import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        display: 'block',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass="blocks-wrapper"
      colors={[
        '#1337ca',
        'rgba(238,238,8,1)',
        '#1337ca',
        'rgba(238,238,8,1)',
        '#1337ca',
      ]}
    />
  );
};
