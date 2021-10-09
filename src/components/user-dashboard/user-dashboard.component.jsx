//React imports
import React from 'react';

//Vendor imports
import {
  GridContainer,
  Grid,
  Cell,
  Alignments,
  GutterTypes
} from 'react-foundation';

//My imports
import badgeImgUrl from './../../assets/badge.png';
import crashCoverImgUrl from './../../assets/crash-remaster.jpg';
import aliceCoverImgUrl from './../../assets/alice-madness-cover.jpg';

import './user-dashboard.styles.scss';

const UserDashboard = () => (
  <main>
    <GridContainer>
      <Grid alignX={Alignments.JUSTIFY} gutters={GutterTypes.PADDING}>

        <Cell large='6'>
          <div className='user-dashboard-container'>
            <h2>General Information</h2>
            <h3>Kanxx</h3>

            <div className='flex-container align-middle'>
              <p style={{ marginRight: '10px' }} className='flex-container flex-dir-column'>
                <small>Level</small>
                <span>8,6</span>
              </p>

              <div className='user-dashboard-lvl-bar'></div>
            </div>

            <p>
              <span><strong>Country: </strong> Costa Rica</span>
            </p>
            <p>
              <span><strong>Email:</strong> email@gmail.com</span>
            </p>
          </div>
        </Cell>

        <Cell large='6'>
          <div className='user-dashboard-container'>

            <h2>My Badges</h2>

            <Grid gutters={GutterTypes.PADDING}>

              <Cell small='4' medium='4'>
                <div className='user-dashboard-badge'>
                  <img src={badgeImgUrl} alt='Badge figure' />
                </div>
              </Cell>
              <Cell small='4' medium='4'>
                <div className='user-dashboard-badge'>
                  <img src={badgeImgUrl} alt='Badge figure' />
                </div>
              </Cell>

            </Grid>

          </div>
        </Cell>

        <Cell large='6'>
          <div className='user-dashboard-container'>

            <h2>Recent Games</h2>

            <Grid gutters={GutterTypes.PADDING}>
              <Cell small='4' medium='4'>
                <div className='user-dashboard-recent-games'>
                  <img src={crashCoverImgUrl} alt='game cover' />
                </div>
              </Cell>

              <Cell small='4' medium='4'>
                <div className='user-dashboard-recent-games'>
                  <img src={aliceCoverImgUrl} alt='game cover' />
                </div>
              </Cell>
            </Grid>

          </div>
        </Cell>

      </Grid>
    </GridContainer>

  </main>
);

export default UserDashboard;