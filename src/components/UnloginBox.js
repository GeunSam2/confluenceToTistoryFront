import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { apiServer } from './config';
import OauthPopup from './popup.js';
import axios from 'axios';

const onCode = (code, params) => {
    console.log('wooooo a code', code);
    console.log('alright! the URLSearchParams interface from the popup url', params);
};

const onClose = () => {
    console.log('closed!');
    // 이후에 페이지 리로드 대신 컴포넌트 리로드로 변경
    window.location.reload();
};

const UnloginBox = () => {
    const [baseUrls, setBaseUrls] = useState('http://example.com');

    const loadItem = () => {
        axios
            .get(apiServer + 'getoauthurl')
            .then(({ data }) => {
                setBaseUrls(data.url);
                console.log(data.url);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    useEffect(() => {
        loadItem();
    }, []);

    return (
        <div>
            <div>Confluence need your identity. Press Button to try Oauth2.0</div>
            <OauthPopup url={baseUrls} onCode={onCode} onClose={onClose}>
                <Button type="primary" style={{ margin: 'auto' }}>
                    Go to conf login
                </Button>
            </OauthPopup>
        </div>
    );
};

export default UnloginBox;
