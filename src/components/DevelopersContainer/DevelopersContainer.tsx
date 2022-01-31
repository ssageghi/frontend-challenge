import React, { FunctionComponent } from 'react';
import { DevelopersProps } from '../../interfaces/DeveloeprInterfaces'
import Developer from '../Developer';

const DevelopersContainer: FunctionComponent<DevelopersProps> = (props) => {
  const { developers } = props;

  return (<>
    {
      developers?.map((developer, index) => (
        <Developer developer={developer} key={developer.author} index={index} />
      ))

    }
  </>);
}

export default DevelopersContainer;
