import React from 'react';

// お知らせ（独自実装）
// お知らせ一覧やStyle等、なるべくこのファイルだけで閉じるようにしている。

// お知らせ一覧
// HTMLはそのままレンダリングされるので注意して書くこと
const announcements = [
  'リフトドンpick\'emランキング2020への参加や閲覧は <a href="https://pickem.lolesports.com/share/series/7/user/4067186/leaderboards/list/invite/s2p7sj3Ik7ToVU5Wfo0P/923519" target="_blank">こちら</a> から！'
];

const ulStyle = {
  padding: '0 10px',
}

const liStyle = {
  background: '#ebebeb',
  padding: '10px',
  color: '#606984',
  borderRadius: '4px',
}

export default class Announcements extends React.PureComponent {

  render () {
    return (
        <div className='announcements'>
          <ul style={ulStyle}>
            {announcements.map((body) => (
              <li
               style={liStyle}
               dangerouslySetInnerHTML={{__html: body}}
              />
            ))}
          </ul>
        </div>
    );
  }
}
