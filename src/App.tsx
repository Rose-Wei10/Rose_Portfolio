// src/App.tsx
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
  UserOutlined,
  FileOutlined,
  ProjectOutlined,
  ExperimentOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

export default function App() {
  const [selectedKey, setSelectedKey] = useState<string>('1');
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'About Me',
    },
    {
      key: '2',
      icon: <FileOutlined />,
      label: 'Resume',
    },
    {
      key: '3',
      icon: <ProjectOutlined />,
      label: 'Projects',
    },
    {
      key: '4',
      icon: <ExperimentOutlined />,
      label: 'Experience',
    },
    {
      key: '5',
      icon: <ContactsOutlined />,
      label: 'Contact',
    },
  ];

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <AboutMe />;
      case '2':
        return <Resume />;
      case '3':
        return <Projects />;
      case '4':
        return <Experience />;
      case '5':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ 
        padding: 0, 
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          {/* Add your header content here */}
        </div>
      </Header>

      <Content style={{ 
        background: '#fff',
        marginTop: "2rem"
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <Layout style={{ background: '#fff' }}>
            <Sider 
              collapsible 
              collapsed={collapsed} 
              onCollapse={setCollapsed}
              style={{ background: '#fff' }}
              width={200}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
                items={menuItems}
                onClick={({ key }) => setSelectedKey(key)}
              />
            </Sider>

            <Content style={{ padding: '0 1.5rem', minHeight: 280 }}>
              {renderContent()}
            </Content>
          </Layout>
        </div>
      </Content>

      <Footer style={{ 
        padding: '1.5rem 0',
        background: '#f0f2f5'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          Your Name ©{new Date().getFullYear()} Created with React & Ant Design
        </div>
      </Footer>
    </Layout>
  );
}