import { FunctionComponent, useContext } from 'react';
import { Radio } from 'antd';
import { Select } from 'antd'
import './TrendActionButtons.scss';
import languages from '../../staticData/languages.json'
import spoken_languages from '../../staticData/spoken_languages.json'
interface Props {
  requestPrams: {
    section: string,
    since: string,
    spoken_language_code: string,
    language: string
  };
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

  return <div className='trend-action-buttons-container'>
    <div className='toggle-buttons'>
      <Radio.Group options={ButtonOptions} optionType="button" defaultValue={requestPrams.section}
        buttonStyle="solid" onChange={(e) => setRequestParams({ ...requestPrams, section: e.target.value })} />
    </div>

    <div className='select-boxes'>
      {
        requestPrams.section === "repositories" ?
          <div className='select-box'>
            <p>Spoken Languages:</p>
            <Select
              showSearch
              placeholder="Any"
              optionFilterProp="children"
              dropdownMatchSelectWidth={false}
              defaultValue="Any"
              onChange={(e) => setRequestParams({ ...requestPrams, spoken_language_code: e })}
            >
              {spoken_languages?.map((option: { code?: string, name?: string, native?: string }) => (
                <Select.Option value={option.code} key={option.code}>{option.name}</Select.Option>

              ))}
            </Select>
          </div> : ""
      }
      <div className='select-box'>
        <p>Languages: </p>
        <Select
          showSearch
          defaultValue="Any"
          placeholder="Any"
          dropdownMatchSelectWidth={false}
          onChange={(e) => setRequestParams({ ...requestPrams, language: e })}
          optionFilterProp="children"
        >
          {languages?.map((option: string) => (
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
          dropdownMatchSelectWidth={false}
          placeholder="Any"
          defaultValue="Any"
          optionFilterProp="children"
        >
          <Select.Option value={"daily"} key={"Today"} >today</Select.Option>
          <Select.Option value={"weekly"} key={"this-week"} >This Week</Select.Option>
          <Select.Option value={"monthly"} key={"this-month"} >This Month</Select.Option>

        </Select>
      </div>
    </div>
  </div>;

}

export default TrendActionButtons;
