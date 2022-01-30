import { FunctionComponent, useContext } from 'react';
import { Radio } from 'antd';
import { Select } from 'antd'
import './TrendActionButtons.scss';
import mainContext from '../../context/mainContext';

interface Props {
  requestPrams: Object;
  setRequestParams: (val: Object) => void;
};
const TrendActionButtons: FunctionComponent<Props> = ({
  requestPrams,
  setRequestParams,
}) => {
  const ButtonOptions = [
    { label: 'Repositories', value: 'repositories' },
    { label: 'Developers', value: 'developers' },
  ];
  const { options } = useContext(mainContext)
  const selectChange = (e: string) => {
    console.log(e);
  }
  return <div className='trend-action-buttons-container'>
    <div className='toggle-buttons'>
      <Radio.Group options={ButtonOptions} optionType="button" defaultValue={requestPrams}
        buttonStyle="solid" onChange={(e) => setRequestParams({ ...requestPrams, section: e.target.value })} />
    </div>

    <div className='select-boxes'>
      <div className='select-box'>
        <p>Spoken Languages:</p>
        <Select
          showSearch
          placeholder="Any"
          optionFilterProp="children"
          defaultValue="Any"
          onChange={(e) => setRequestParams({ ...requestPrams, spoken_language_code: e })}
        >
          {options.languages?.map((option: string) => (
            <Select.Option value={option} key={option}>{option}</Select.Option>

          ))}
        </Select>
      </div>
      <div className='select-box'>
        <p>Languages: </p>
        <Select
          showSearch
          defaultValue="Any"
          placeholder="Any"
          onChange={(e) => setRequestParams({ ...requestPrams, language: e })}
          optionFilterProp="children"
        >
          {options.spoken_languages?.map((option: string) => (
            <Select.Option value={option} key={option}>{option}</Select.Option>

          ))}
        </Select>
      </div>
      <div className='select-box'>
        <p>
          Date range:
        </p>
        <Select
          onChange={(e) => setRequestParams({ ...requestPrams, since: e })}
          showSearch
          placeholder="Any"
          defaultValue="Any"
          optionFilterProp="children"
        >
          <Select.Option value={"today"} key={"Today"} >today</Select.Option>
          <Select.Option value={"this-week"} key={"this-week"} >This Week</Select.Option>
          <Select.Option value={"this-month"} key={"this-month"} >This Month</Select.Option>

        </Select>
      </div>
    </div>
  </div>;

}

export default TrendActionButtons;
