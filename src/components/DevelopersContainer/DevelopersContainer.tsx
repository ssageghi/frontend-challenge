import { Empty } from 'antd';
import { FunctionComponent } from 'react';
import { DevelopersProps } from '../../interfaces/DeveloeprInterfaces'
import Developer from '../Developer';

const DevelopersContainer: FunctionComponent<DevelopersProps> = (props) => {
  const { developers } = props;

  return (<>
    {
      developers.length > 0 ? developers.map((developer, index) => (
        <Developer developer={developer} key={developer.author} index={index} />
      )) : <Empty className='no_data' />

    }
  </>);
}

export default DevelopersContainer;
