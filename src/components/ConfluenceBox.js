import React from 'react';
import { Row, Col } from 'antd';
import UnloginBox from './UnloginBox';

const BoxBase = () => (
    <div>
        <Row span={24} style={{ textAlign: 'justify' }}>
            Get Content Of Confluence
        </Row>
        <Row span={24}>
            <UnloginBox />
        </Row>
    </div>
);

export default BoxBase;
