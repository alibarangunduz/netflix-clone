import React, { useState, useContext, useEffect} from 'react';
import {SelectProfileContainer} from './profiles'
import { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components'
import * as ROUTES from "../constants/routes";
import logo from '../logo.svg';

export function BrowseContainer({ slides }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [profile, setProfile] = useState({}); 
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);

    const user = firebase.auth().currentUser || {};
    
    useEffect(() => {
        console.log('profile', profile)
        setTimeout(() => {
           setLoading(false); 
        }, 3000);
    }, [profile.displayName]);

    return profile.displayName ? (
      <>
        {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
              <Header.TextLink>Series</Header.TextLink>
              <Header.TextLink>Films</Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.TextLink>{user.displayName}</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => firebase.auth().signOut()}>
                      Sign Out
                    </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallOut> Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>
              The Bishop of Hong Kong is the head of the Roman Catholic Diocese
              of Hong Kong, and responsible for looking after its spiritual and
              administrative needs. The Diocese of Hong Kong is nominally part
              of the ecclesiastical province of Canton and thus is a suffragan
              of that archdiocese. However, it has been exempt in practice since
              1951, when the People's Republic of China severed diplomatic
              relations with the Holy See. As a crown colony of the United
              Kingdom at the time
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
      </>
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    ); 
    
}