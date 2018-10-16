import React from 'react';

// お知らせ（独自実装）
// お知らせ一覧やStyle等、なるべくこのファイルだけで閉じるようにしている。

// お知らせ一覧
// HTMLはそのままレンダリングされるので注意して書くこと
const announcements = [
  'リフトドンpick\'emランキングへの参加や閲覧は <a href="http://pickem.lolesports.com/share/series/5/user/4218331/leaderboards/list/invite/JID81DkbL0noJIXBZMph/682247" target="_blank">こちら</a> から！'
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
