import { Drawer, Select } from '@arco-design/web-react';
import OfficialSelect from 'ui/OfficialSelect';

const Home = () => {
  return (
    <Drawer visible>
      <Select>
        <Select.Option value="12121">12121</Select.Option>
      </Select>

      <OfficialSelect />
    </Drawer>
  );
};

export default Home;
