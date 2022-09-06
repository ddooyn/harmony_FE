import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
import useAuth from '../../hooks/useAuth';
import ScoreModal from '../family/ScoreModal';
import {
  IconHome,
  IconGallery,
  IconVoice,
  IconCommunity,
  IconSettings,
} from '../../assets/icons';

const Navbar = () => {
  const { pathname } = useLocation();
  const { scoreUp } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [isShowing, setIsShowing] = useState(true);
  const paths = ['/login', '/signup', '/signupcomplete', '/familycode', '/role', '/schedules', '/galleries/posts', '/community/posts'];

  useEffect(() => {
    if (scoreUp) setModalVisible(true);
  }, [scoreUp])

  useEffect(() => {
    for (let path of paths) {
      if (_.includes(pathname, path)) {
        setIsShowing(false);
        return;
      } else {
        setIsShowing(true);
      }
    }
  }, [pathname]);

  return (
    <>
      {isShowing && (
        <Navigation>
          <Lists>
            <li>
              <Menu to="/">
                <IconHome />
                캘린더
              </Menu>
            </li>
            <li>
              <Menu to="/galleries">
                <IconGallery />
                갤러리
              </Menu>
            </li>
            <li>
              <Menu to="/voice-mails">
                <IconVoice />
                소리샘
              </Menu>
            </li>
            <li>
              <Menu to="/community">
                <IconCommunity />
                커뮤니티
              </Menu>
            </li>
            <li>
              <Menu to="/settings">
                <IconSettings />
                설정
              </Menu>
            </li>
          </Lists>
        </Navigation>
      )}

      {modalVisible === true && (
        <ScoreModal
          isVisible={modalVisible}
          setIsVisible={setModalVisible}
        />
      )}
    </>
  );
};

export default Navbar;

const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  font-size: 12px;
  z-index: 100;
  a {
    color: #868686;
  }

  @media only screen and (min-width: 1025px) {
    width: 500px;
  }
`;

const Lists = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    display: flex;
    flex: 1;
  }
`;

const Menu = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 5px 10px;
  svg {
    margin-bottom: 2px;
  }
  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 600;
    svg path {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
