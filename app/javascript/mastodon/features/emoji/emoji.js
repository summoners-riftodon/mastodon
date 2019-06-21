import { autoPlayGif } from '../../initial_state';
import unicodeMapping from './emoji_unicode_mapping_light';
import Trie from 'substring-trie';

const trie = new Trie(Object.keys(unicodeMapping));

const assetHost = process.env.CDN_HOST || '';

const lolJson = {
  'Aatrox': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Aatrox.png',
  'Ahri': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Ahri.png',
  'Akali': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Akali.png',
  'Alistar': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Alistar.png',
  'Amumu': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Amumu.png',
  'Anivia': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Anivia.png',
  'Annie': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Annie.png',
  'Ashe': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Ashe.png',
  'AurelionSol': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/AurelionSol.png',
  'Azir': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Azir.png',
  'Bard': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Bard.png',
  'Blitzcrank': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Blitzcrank.png',
  'Brand': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Brand.png',
  'Braum': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Braum.png',
  'Caitlyn': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Caitlyn.png',
  'Camille': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Camille.png',
  'Cassiopeia': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Cassiopeia.png',
  'Chogath': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Chogath.png',
  'Corki': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Corki.png',
  'Darius': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Darius.png',
  'Diana': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Diana.png',
  'DrMundo': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/DrMundo.png',
  'Draven': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Draven.png',
  'Ekko': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Ekko.png',
  'Elise': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Elise.png',
  'Evelynn': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Evelynn.png',
  'Ezreal': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Ezreal.png',
  'Fiddlesticks': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Fiddlesticks.png',
  'Fiora': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Fiora.png',
  'Fizz': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Fizz.png',
  'Galio': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Galio.png',
  'Gangplank': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Gangplank.png',
  'Garen': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Garen.png',
  'Gnar': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Gnar.png',
  'Gragas': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Gragas.png',
  'Graves': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Graves.png',
  'Hecarim': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Hecarim.png',
  'Heimerdinger': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Heimerdinger.png',
  'Illaoi': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Illaoi.png',
  'Irelia': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Irelia.png',
  'Ivern': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Ivern.png',
  'Janna': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Janna.png',
  'JarvanIV': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/JarvanIV.png',
  'Jax': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Jax.png',
  'Jayce': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Jayce.png',
  'Jhin': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Jhin.png',
  'Jinx': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Jinx.png',
  'Kaisa': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Kaisa.png',
  'Kalista': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Kalista.png',
  'Karma': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Karma.png',
  'Karthus': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Karthus.png',
  'Kassadin': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Kassadin.png',
  'Katarina': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Katarina.png',
  'Kayle': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Kayle.png',
  'Kayn': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Kayn.png',
  'Kennen': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Kennen.png',
  'Khazix': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Khazix.png',
  'Kindred': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Kindred.png',
  'Kled': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Kled.png',
  'KogMaw': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/KogMaw.png',
  'Leblanc': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Leblanc.png',
  'LeeSin': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/LeeSin.png',
  'Leona': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Leona.png',
  'Lissandra': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Lissandra.png',
  'Lucian': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Lucian.png',
  'Lulu': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Lulu.png',
  'Lux': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Lux.png',
  'Malphite': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Malphite.png',
  'Malzahar': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Malzahar.png',
  'Maokai': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Maokai.png',
  'MasterYi': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/MasterYi.png',
  'MissFortune': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/MissFortune.png',
  'MonkeyKing': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/MonkeyKing.png',
  'Mordekaiser': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Mordekaiser.png',
  'Morgana': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Morgana.png',
  'Nami': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Nami.png',
  'Nasus': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Nasus.png',
  'Nautilus': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Nautilus.png',
  'Neeko': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Neeko.png',
  'Nidalee': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Nidalee.png',
  'Nocturne': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Nocturne.png',
  'Nunu': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Nunu.png',
  'Olaf': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Olaf.png',
  'Orianna': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Orianna.png',
  'Ornn': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Ornn.png',
  'Pantheon': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Pantheon.png',
  'Poppy': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Poppy.png',
  'Pyke': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Pyke.png',
  'Quinn': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Quinn.png',
  'Rakan': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Rakan.png',
  'Rammus': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Rammus.png',
  'RekSai': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/RekSai.png',
  'Renekton': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Renekton.png',
  'Rengar': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Rengar.png',
  'Riven': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Riven.png',
  'Rumble': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Rumble.png',
  'Ryze': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Ryze.png',
  'Sejuani': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Sejuani.png',
  'Shaco': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Shaco.png',
  'Shen': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Shen.png',
  'Shyvana': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Shyvana.png',
  'Singed': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Singed.png',
  'Sion': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Sion.png',
  'Sivir': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Sivir.png',
  'Skarner': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Skarner.png',
  'Sona': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Sona.png',
  'Soraka': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Soraka.png',
  'Swain': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Swain.png',
  'Syndra': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Syndra.png',
  'Sylas': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Sylas.png',
  'TahmKench': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/TahmKench.png',
  'Taliyah': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Taliyah.png',
  'Talon': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Talon.png',
  'Taric': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Taric.png',
  'Teemo': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Teemo.png',
  'Thresh': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Thresh.png',
  'Tristana': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Tristana.png',
  'Trundle': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Trundle.png',
  'Tryndamere': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Tryndamere.png',
  'TwistedFate': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/TwistedFate.png',
  'Twitch': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Twitch.png',
  'Udyr': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Udyr.png',
  'Urgot': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Urgot.png',
  'Varus': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Varus.png',
  'Vayne': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Vayne.png',
  'Veigar': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Veigar.png',
  'Velkoz': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Velkoz.png',
  'Vi': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Vi.png',
  'Viktor': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Viktor.png',
  'Vladimir': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Vladimir.png',
  'Volibear': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Volibear.png',
  'Warwick': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Warwick.png',
  'WuKong': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/MonkeyKing.png',
  'Xayah': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Xayah.png',
  'Xerath': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Xerath.png',
  'XinZhao': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/XinZhao.png',
  'Yasuo': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Yasuo.png',
  'Yorick': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Yorick.png',
  'Yuumi': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Yuumi.png',
  'Zac': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Zac.png',
  'Zed': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Zed.png',
  'Ziggs': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Ziggs.png',
  'Zilean': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Zilean.png',
  'Zoe': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Zoe.png',
  'Zyra': '//ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Zyra.png',

  ':Barrier:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerBarrier.png',
  ':Clarity:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerMana.png',
  ':Cleanse:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerBoost.png',
  ':Exhaust:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerExhaust.png',
  ':Heal:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerHeal.png',
  ':Ignite:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerDot.png',
  ':Flash:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerFlash.png',
  ':Ghost:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerHaste.png',
  ':Mark:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerSnowball.png',
  ':Smite:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerSmite.png',
  ':Teleport:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/spell/SummonerTeleport.png',

  ':TearOfTheGoddess:': '//ddragon.leagueoflegends.com/cdn/7.4.1/img/item/3070.png',

  // Japan Esports Icons
  // 'DFM:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3295.png',
  ':PGM:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3296.png',
  ':USG:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3297.png',
  ':7H:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3298.png',
  ':RJ:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3299.png',
  ':V3:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3300.png',
  ':BC:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3547.png',
  ':SZ:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3516.png',
  ':CGA:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3515.png',
  ':BE:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/1196.png',

  // WCS2018 Icons
  ':KT:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3744.png',
  ':AF:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3740.png',
  ':GEN:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3741.png',
  ':RNG:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3762.png',
  ':IG:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3759.png',
  ':EDG:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3758.png',
  ':FNC:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3733.png',
  ':VIT:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3738.png',
  ':G2:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3734.png',
  ':TL:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3767.png',
  ':100T:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3763.png',
  ':C9:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3764.png',
  ':FW:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3752.png',
  ':MAD:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3757.png',
  ':GRX:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3753.png',
  ':PVB:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3775.png',
  ':KBM:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3730.png',
  ':GMB:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3746.png',
  ':INF:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3751.png',
  ':SUP:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3770.png',
  ':DFM:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3747.png',
  ':KLG:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3731.png',
  ':DW:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3769.png',
  ':ASC:': '//ddragon.leagueoflegends.com/cdn/8.19.1/img/profileicon/3739.png'
};

const emojify = (str, customEmojis = {}) => {
  for(let k in lolJson) {
    const name = k.replace(/:/g, '');
    customEmojis[k] = {
      short_code: name,
      static_url: lolJson[k],
      url: lolJson[k],
      visible_in_picker: true,
    };
  }
  const tagCharsWithoutEmojis = '<&';
  const tagCharsWithEmojis = Object.keys(customEmojis).length ? '<&:' : '<&';
  let rtn = '', tagChars = tagCharsWithEmojis, invisible = 0;
  for (;;) {
    let match, i = 0, tag;
    while (i < str.length && (tag = tagChars.indexOf(str[i])) === -1 && (invisible || !(match = trie.search(str.slice(i))))) {
      i += str.codePointAt(i) < 65536 ? 1 : 2;
    }
    let rend, replacement = '';
    if (i === str.length) {
      break;
    } else if (str[i] === ':') {
      if (!(() => {
        rend = str.indexOf(':', i + 1) + 1;
        if (!rend) return false; // no pair of ':'
        const lt = str.indexOf('<', i + 1);
        if (!(lt === -1 || lt >= rend)) return false; // tag appeared before closing ':'
        const shortname = str.slice(i, rend);
        // now got a replacee as ':shortname:'
        // if you want additional emoji handler, add statements below which set replacement and return true.
        if (shortname in customEmojis) {
          const filename = autoPlayGif ? customEmojis[shortname].url : customEmojis[shortname].static_url;
          replacement = `<img draggable="false" class="emojione" alt="${shortname}" title="${shortname}" src="${filename}" />`;
          return true;
        }
        return false;
      })()) rend = ++i;
    } else if (tag >= 0) { // <, &
      rend = str.indexOf('>;'[tag], i + 1) + 1;
      if (!rend) {
        break;
      }
      if (tag === 0) {
        if (invisible) {
          if (str[i + 1] === '/') { // closing tag
            if (!--invisible) {
              tagChars = tagCharsWithEmojis;
            }
          } else if (str[rend - 2] !== '/') { // opening tag
            invisible++;
          }
        } else {
          if (str.startsWith('<span class="invisible">', i)) {
            // avoid emojifying on invisible text
            invisible = 1;
            tagChars = tagCharsWithoutEmojis;
          }
        }
      }
      i = rend;
    } else { // matched to unicode emoji
      const { filename, shortCode } = unicodeMapping[match];
      const title = shortCode ? `:${shortCode}:` : '';
      replacement = `<img draggable="false" class="emojione" alt="${match}" title="${title}" src="${assetHost}/emoji/${filename}.svg" />`;
      rend = i + match.length;
      // If the matched character was followed by VS15 (for selecting text presentation), skip it.
      if (str.codePointAt(rend) === 65038) {
        rend += 1;
      }
    }
    rtn += str.slice(0, i) + replacement;
    str = str.slice(rend);
  }
  return rtn + str;
};

export default emojify;

export const buildCustomEmojis = (customEmojis) => {
  const emojis = [];

  customEmojis.forEach(emoji => {
    const shortcode = emoji.get('shortcode');
    const url       = autoPlayGif ? emoji.get('url') : emoji.get('static_url');
    const name      = shortcode.replace(':', '');

    emojis.push({
      id: name,
      name,
      short_names: [name],
      text: '',
      emoticons: [],
      keywords: [name],
      imageUrl: url,
      custom: true,
    });
  });

  for(let k in lolJson) {
    const name = k.replace(/:/g, '');

    emojis.push({
      id: name,
      name: name,
      short_names: [name],
      text: '',
      emoticons: [],
      keywords: [name],
      imageUrl: lolJson[k],
      custom: true,
    });
  }

  return emojis;
};
