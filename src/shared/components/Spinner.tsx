import { ReactElement } from 'react';
interface SpinnerModels {
  height?: string | number;
}
const Spinner = ({ height }: SpinnerModels): ReactElement => {
  return (
    <div className="fallback-loader" style={{ height: height || '100vh' }}>
      <h1>Here, set loader icon...</h1>
    </div>
  );
};

export default Spinner;
