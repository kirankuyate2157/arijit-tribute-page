import React, { useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import Details from './Details';


const Pages = [{
    title: 'Eearly Life',
    image: 'https://static.javatpoint.com/biography/images/arijit-singh.png',
    para: [
        'On April 25, 1987, Arijit was born in Murshidabad, Jiaganj, West Bengal, India Arijit Singh is one of the most loved and famous singers from India. In 2005, he was among the top six contestants on the reality singing show Fame Gurukul, and later, he went on to work as an assistant to music director Pritam. Arijit Singh, known for his deep voice that resounds with love tunes, is breaking new ground in the music industry by conjuring unforgettable notes for youthful hearts.',
        'He studied at Raja Bijay Singh High School and later at the Sripat Singh College, a University of Kalyani affiliate. According to him he "was a decent student, but cared more about music" and his parents decided to train him professionally. He was taught Indian classical music by Rajendra Prasad Hazari and trained in tabla by Dhirendra Prasad Hazari. Birendra Prasad Hazari taught him Rabindra Sangeet (songs written and composed by Rabindranath Tagore) and pop music. At the age of three, he started training under the Hazari brothers, and at the age of nine, he got a scholarship from the government for training in vocals in Indian classical music.',
        'Growing up, he listened to Mozart, Beethoven and Bengali classical music.[citation needed] He idolized musicians like Bade Ghulam Ali Khan, Ustad Rashid Khan, Zakir Hussain and Anand Chatterjee, and enjoyed listening to Kishore Kumar, Hemant Kumar, and Manna Dey.',

    ]

}, {
    title: 'Career',
    image: 'https://www.koimoi.com/wp-content/new-galleries/2022/11/arijit-singh-sells-single-ticket-worth-16-lakhs-gets-compared-with-taylor-swift-after-her-high-ticketing-price-debacle-01.jpg',
    para: [
        'Born to a Punjabi father and Bengali mother in Murshidabad in West Bengal, Arijit Singh, got trained in classical singing at an early age. He gives credit to his â€˜three gurusâ€™- Rajendra Prasad Hazari for teaching him Indian classical music, Dhirendra Prasad Hazari for tabla lessons, and Birendra Prasad Hazari for teaching him Rabindra sangeet and pop music. Also his grandmother sings, while his mother`s sister (mausi) sings Indian Classical vocals. His maternal uncle plays the tabla.',
        'His career as a playback singer came when he was in college and participated in a TV reality show called Fame Gurukul in 2005. Although he did not win the competition, he earned a large fan following and later went on to win â€˜10 Ke 10 Le Gaye Dilâ€™ song competition reality show with audience votes.',
        'When TIPS industries signed him up for a contract when he was 18, he said, â€œI am very happy with this contract. They have promised us five albums in the next five years. But it doesn`t mean that we cannot work outside the company. We just have to inform TIPS. For example, if I get an offer and decide to sing, I will have to inform the company about it. See, I am doing shows organized by other companies.',
        'It was Shankar Ehsaan Loy who gave Arijit his break with the song All For One for the High School Musical 2 (Vol.1) Album. In that period, Arijit had also sung the title song Hum Hai Deewane (during which he says he slept through the auditions) for the Indian TV Show called Madhubala â€“Ek Ishq Ek Junoon and Dadagiri with Avishek Das. The Show featured Sourav Ganguly. The other track he sang was for the Bengali TV serial Tomay Amay Mile, along with Ujjaini Mukherjee.',
        'He became more well - known with the release of "Tum Hi Ho" from Aashiqui 2.  He was given the Best Male Playback Singer award for the song, in 59th Filmfare Awards',

    ]
}, {
    title: 'Musical Style',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Arijit_5th_GiMA_Awards.jpg/330px-Arijit_5th_GiMA_Awards.jpg',
    para: [
        'Playback singer Arijit Singh has enthralled us all with his extravagant music so far. Arijit started with how many others singers started their career, with a music reality show. But he started with a less popular show called Fame Gurukul way back in the year 2005. What makes him different is that he was not among the top three contenders in the reality show. After the triumph in such reality shows, winners are nowhere to be seen soon after the show ends. But Arijit worked hard to prove his mettle and caliber.',
        'With the soulful song Tum Hi Ho from Aashiqui 2, Arijit won millions of hearts. Ever since then there has been no looking back for the versatile singer. Since the start of Arijit’s playback singing career, we have received some gems, be it Tum Hi Ho, Humdard, Phir Mohabbat or Phir Le Aya Dil, Arijit has given us some of the most memorable songs that will never lose its charm.',
        'Although many people compare him with Atif Aslam, Arijit has proved with his work that he is far more superior to his contemporaries. Also Arijit has been criticized for the fact that he is not versatile enough to sing different genres. But those people who criticize him have not explored his music. If you listen to Arijit Singh live you will come to know that not only is he a knowledgeable musician, but his work reflects the high aesthetics of music',
        'He is one amazing artist who is known to experiment with his own work. What Arijit delivers in the studio version of an album, is very different to what he does at live music events. He can change the whole range and feel of the song by giving it a different treatment. The MTV Unplugged show performances by the singer is just one such example of how much effort the singer puts in every time to deliver something better.',
        'Arijit improvises each and every song every time he picks up the mic to mesmerize us with his voice. He is one singer who does not fear away from performing a song already performed by an established singer by giving the song his unique touch. At live concerts Arijit also gives you a trip into his favourite playlist by crooning the most amazing songs that he likes, and believe me, his playlist is as amazing as his own songs.',
        'At his recent live concert in D Y Patil stadium, Navi Mumbai, Arijit did not just croon to his own songs, but also some amazing songs from movies such as Gangster, Dil Chahta Hai, Dil Se. He also chose to sing some evergreen memorable songs such as Chandni Raatein, Lag Ja Gale, and many other classic songs.',
        'Despite achieving all the fame and a huge fan base the singer maintains, he shies away from limelight. He comes from a small place called Jiaganj in West Bengal and no matter what he is today, he is not comfortable with limelight. Let’s take a look at things what makes him different from the rest of the singers and what made him the most successful singer currently ruling the music industry.',
        '1. Arijit Singh started off by participating in a reality show, but worked hard to prove his mettle and caliber.', ' 2. Arijit Singh’s speckless voice dribbles like honey.', ' 3. With his warm voice Arijit brings in soul and meaning to any kind of song. ', ' 4. Arijit Singh makes sure to give  a unique touch with his every new song. ', ' 5. Arijit’s MTV Unplugged versions are much better than the original songs! ', ' 6. Arijit is one singer who will never lip sync.', ' 7. He is not just a singer but an amazing performer! You will be amazed to see how he manages to come out of his comfort zone and perform. ', ' 8. Arijit improvises songs when singing live at concerts, and they sound nothing but amazing. Wouldn’t you agree? ', ' 9. Although he is not comfortable with the limelight, his fans go crazy when he interacts with them at live events.', ' 10. He is not afraid to show his emotional side. ', ' 11. Although at times the lyrics might make you cringe a little, but Arijit’s voice makes up for the lyrics! Don’t you agree?',
    ]
}, {
    title: 'Personal Life',
    image: 'https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_xl_1638898900.webp',
    para: [
        'Arijit Singh’s birthday is 25 April 1987. Arijit Singh’s birth place is Murshidabad, West Bengal. Arijit Singh’s age is 35 years, as of 2022. Arijit Singh’s religion is Sikhism. Arijit Singh’s zodiac sign is Taurus. Arijit Singh’s height is 1.68m or 5’6.',
        'Arijit Singh’s father’s name is Kakkar Singh and his mother’s name is Aditi Singh. Arijit Singh’s father is a Punjabi Sikh and his mother is a Bengali Hindu woman. The Partition brought his father`s family from Lahore to India.At a very young age, he started learning music at home.His maternal grandma used to sing, and his maternal aunt is trained in Indian classical music.His mother sang and played the tabla, while his maternal uncle also played the instrument.On May 19, 2021, Arijit Singh lost his mother in Kolkata.She allegedly tested COVID- negative on May 17, 2021, but passed away from a brain stroke.',
        ' First Wife - Rumours claim that in 2013, when Arijit Singh was employed as a music programmer, he wed Ruprekha Banerjee, a competitor on his first reality series, Fame Gurukul. However, Arijit Singh and Ruprekha Banerjee`s initial union didn`t last long, and they quickly divorced. According to a number of accounts, he chose to get married for the first time on impulse and quickly.',
        ' Second Wife - Following a contentious divorce, Arijit Singh began dating his current spouse, Koel Roy, a childhood friend. Arijit Singh and Koel Roy got married on 20 January 2014. Following Bengali wedding customs, the pair exchanged vows in West Bengal`s Tarapeeth Temple.They have been blissfully married ever since. ',
        'Few people from the Hindi film business were invited to Arijit Singh`s wedding since it was kept quiet. According to reports, Pritam, the music composer who had initially assisted Arijit in staking his roots, was the only person with a recognised name who had attended his second marriage.Arijit Singh and Koel are parents to three children. Two boys of the couple and a daughter of Koel roy from her previous marriage.',
        'Arijit Singh is a badminton player, writer, movie buff, and documentary producer in addition to being a vocalist. He also enjoys cricket, and his favourite athletes are Jonty Rhodes, Lance Klusener, Sourav Ganguly, and Sachin Tendulkar. He appreciates Saina Nehwal in badminton. He is a die-hard supporter of Manchester United and football in general. Additionally, he has stated a desire to perform the World Cup anthem in Qatar in 2022.',

    ]
}, {
    title: 'Net Worth',
    image: 'https://ik.imagekit.io/j83rchiauw/A_List_Star/Arijit-Singh-net-worth.jpg',
    para: [
        'Arijit Singh’s net worth in 2022 is $7 million US or 55 Crore Indian Rupees, as of 2022. He demands outrageous fees of 8–10 lacs every song in films. He is regarded as the Bollywood industry`s most commercially viable singer.He demands a hefty 1.5 crore for an appearance that lasts an hour.The BPL community is served by the NGO Let there be Light, which is headed by Arijit.He has additionally performed a number of live concerts for good causes.',
        'In India`s affluent neighbourhood of Navi Mumbai, Arijit Singhresides.His home is expected to cost around Rs. 8 crore.His collection of expensive vehicles includes the Hummer, Range Rover, and Mercedes- Benz, each of which costs between 1 and 2 crores.Any celebrity`s income depends significantly on their fan base.One of the most well - known singers and composers in the film industry is Arijit Singh.Mr.Singh is not only a singer, but he also composes music, performs live, and produces music.',
    ]
}, {
    title: 'Arijit Singh and Salman Khan Controversy',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-a945770a214be61ecbace5fc53b79c87-lq',
    para: [
        'In 2014, when Arijit Singh was the guest at an award event hosted by Salman Khan, Arijit was asked jokingly, So Gaye the kya, to which he responded, kya karein aapne Sula diya. This exchange was not well received. Later, a few Salman movies apparently omitted Arijit`s songs.While there were no overt accusations regarding who was responsible for the removal of his songs from Bharat and Sultan, a helpless Arijit apologized on Facebook, which only served to fuel the flames.The letter of apology stated that Arijit had constantly tried to apologize to Salman and urged him not to remove his song from his movie Sultan.He expressed regret for his actions.'
    ]
},
{
    title: 'Awards',
    image: 'https://static.javatpoint.com/biography/images/arijit-singh5.jpg',
    para: [
        '2012: Mirchi Music Awards for Upcoming Male Vocalist of the Year for Duaa from Shanghai',
        '2012: RMIM Puraskaar for Male Singer of the Year for Overall Performance During The Year',
        '2012:  RMIM Puraskaar for Best Sung Solo Song for Phir Le Aaya Dil from Barfi!',
        '2012:  RMIM Puraskaar for Song of the Year for Phir Le Aaya Dil from Barfi!',
        '2012:  RMIM Puraskaar for Satish Kalra Samman for Barfi!',
        '2013: Mirchi Music Awards Bangla for Mon Majhi Re from Boss',
        '2013: Tele Cine Awards for Bojhena Shey Bojhena from Bojhena Shey Bojhena',
        '2013: Mirchi Music Awards for Male Vocalist of the Year for Tum Hi Ho from Ashiqui 2',
        '2013: Mirchi Music Awards for Song Of The Year for Tum Hi Ho from Ashiqui 2',
        '2013: Mirchi Music Awards for Album of the Year for Ashiqui 2',
        '2013: Bollywood Hungama Surfers Choice Music Awards for Tum Hi Ho from Ashiqui 2',
        '2014: Gaana Awards for Most Popular Singer Male for Tum Hi Ho from Ashiqui 2',
        '2014: Filmfare Award for Best Male Playback Singer for Tum Hi Ho from Ashiqui 2',
        '2014: GiMA Award for Best Male Playback Singer for Tum Hi Ho from Ashiqui 2',
        '2014: Star Guild Award for Best Male Playback Singer for Tum Hi Ho from Ashiqui 2',
        '2014: IIFA AWard for Best Male Playback for Tum Hi Ho from Ashiqui 2',
        '2014: Screen Award for Best Male Playback Singer for Tum Hi Ho from Ashiqui 2',
        '2014: Zee Cine Award for Best Playback Singer- Male for Tum Hi Ho from Ashiqui 2',
        '2014: Indian Cinema Magazine UK Awards – Best Male Playback Singer for Sawan Aaya Hai from Creature 3D',
        '2014: Filmfare Award East for Best Male Playback Singer from Mon Majhi Re from Boss',
        '2014: Mirchi Music Awards for Male Vocalist of the Year for Samjhawan from Humpty Sharma Ki Dulhania',
        '2014: Mirchi Music Awards for Album of the Year for 2 States',
        '2014: RMIM Puraskaar for Male Singer of the Year for Overall Performance During The Year',
        '2014:  RMIM Puraskaar for Satish Kalra Samman for Haider',
        '2014:  RMIM Puraskaar for Satish Kalra Samman for Queen',
        '2014: Mirchi Music Awards for Raag-Inspired Song of the Year for Soney Do from CityLights',
        '2015: IBNLive Movie Awards Best Male Playback Singer for  Muskurane from CityLights',
        '2015: GiMA Award for Best Male Playback Singer for Muskurane from CityLights',
        '2015:  Screen Award for Best Male Playback Singer for Muskurane from CityLights',
        '2015:  RMIM Puraskaar for Satish Kalra Samman for Bajirao Mastani',
        '2015: RMIM Puraskaar for Male Singer of the Year for Overall Performance During The Year',
        '2015: Mirchi Music Awards Bangla for Ke Tui Bol from Herogiri',
        '2015: GiMA Award for Best Male Playback Singer for Samjhawan from Humpty Sharma Ki Dulhania',
        '2015: Bollywood Hungama Surfers Choice Music Awards for Gerua from Dilwale',
        '2016: RMIM Puraskaar for Male Singer of the Year for Overall Performance During The Year',
        '2016: Filmfare Award for Best Male Playback Singer from Sooraj Dooba Hain from Roy',
        '2016: Zee Cine Award for Best Playback Singer- Male for Sooraj Dooba Hain from Roy',
        '2016: FOI Online Awards for Hamari Adhuri Kahani from Hamari Adhuri Kahani',
        '2016: GiMA Award for Best Duet for Soch Na Sake for Airlift',
        '2016: GiMA Award for Best Live Performer',
        '2016: Star Guild Award for Best Male Playback Singer for Hamari Adhuri Kahani from Hamari Adhuri Kahani',
        '2016: Stardust Awards for Channa Mereya from Ae Dil Hain Mushkil',
        '2016:  Mirchi Music Awards for Song Of The Year for Channa Mereya from Ae Dil Hain Mushkil',
        '2016: Mirchi Music Awards for Album of the Year for Ae Dil Hain Mushkil',
        '2017: FOI Online Awards for Channa Mereya from Ae Dil Hain Mushkil',
        '2017: Zee Cine Award for Best Playback Singer- Male for Ae Dil Hain Mushkil from Ae Dil Hain Mushkil',
        '2017: Filmfare Award for Best Male Playback Singer for Ae Dil Hain Mushkil from Ae Dil Hain Mushkil',
        '2017: RMIM Puraskaar for Male Singer of the Year for Overall Performance During The Year',
        '2017: RMIM Puraskaar for RMIM Samman for Jab Harry Met Sejal',
        '2017: Mirchi Music Awards for Male Vocalist of the Year for Hawayein from Jab Harry Met Sejal',
        '2017: Mirchi Music Awards for Male Song of the Year for Hawayein from Jab Harry Met Sejal',
        '2017: Mirchi Music Awards for Album of the Year for Jab Harry Met Sejal',
        '2018: National Film Award for Best Male Playback Singer for Binte Dil from Padmavat',
        '2018: Filmfare Award for Best Male Playback Singer for Roke Na Ruke Naina  from Badrinath Ki Dulhania',
        '2018: FOI Online Awards for Hawayein from jab Harry Met Sejal',
        '2018:  IIFA AWard for Best Male Playback for Hawayein from Jab Harry Met Sejal',
        '2018:  IIFA AWard for Best Male Playback for Ae Watan from Raazi',
        '2018: RMIM Puraskaar for Male Singer of the Year for Overall Performance During The Year',
        '2018:  Mirchi Music Awards for Album of the Year for Padmavat',
        '2018:  Screen Award for Best Male Playback Singer for Zaalima from Raees',
        '2018:  Screen Award for Best Male Playback Singer for Galti Se Mistake from Jagga Jasoos',
        '2018: West Bengal Film Journalists’ Association Awards for Maula Re from Chaamp',
        '2019: RMIM Puraskaar for Male Singer of the Year for Overall Performance During The Year',
        '2019: RMIM Puraskaar for Singer of the Decade for Overall Performance During The Year',
        '2019: Filmfare Award for Best Male Playback Singer for Ae Watan from Raazi',
        '2019:  Screen Award for Best Male Playback Singer for Ae Watan from Raazi',
        '2019: Mirchi Music Awards for Album of the Year for Kesari',
        '2019:  Mirchi Music Awards for Male Vocalist of the Year for Kalank from Kalank',
        '2019: Mirchi Music Awards for Song of the Year for Kalank from Kalank',
        '2020: Filmfare Award for Best Male Playback Singer for Kalank from Kalank',
        '2020: RMIM Puraskaar for Male Singer of the Year for Overall Performance During The Year',
        '2020:  IIFA AWard for Best Male Playback for Ghungroo from War',
        '2020:  RMIM Puraskaar for RMIM Samman for Love Aaj Kal',
        '2020:  RMIM Puraskaar for RMIM Samman for Dil Bechara',
        '2020: RMIM Puraskaar for Best Sung Solo Song for Tumhein Mohabbat Hai from Atrangi Re',
        '2020: RMIM Puraskaar for Best Sung Solo Song for Ananya from Toofaan',
        '2020: Zee Cine Award for Best Playback Singer- Male for Pal Pal Dil Ke Paas from Pal Pal Dil Ke Paas',
        '2021:  RMIM Puraskaar for RMIM Samman for Atrangi Re',
        '2021:  RMIM Puraskaar for RMIM Samman for Pagglait',
        '2021: Mirchi Music Awards for Upcoming Music Composer of the Year for Thode Kam Ajnabi from Pagglait',
        '2022: FOI Online Awards for Tumhein Mohabbat Hai from Atrangi Re',
        '2022: FOI Online Awards for Phire Faqeera from Pagglait',
    ]
},

{
    title: 'Intresting Facts',
    image: 'https://i.timesnowhindi.com/arijit-singh-bday-2_1587721276__rend_1_1.jpg?tr=w-600',
    para: [
        'Shankar Ehsaan Loy wrote Arijit`s debut song, All for One from High School Musical 2.',
        'Cycling, photography, Bengali books, and short tales are among Arijit`s many passions.',
        'Arijit``s favourite vocalists include Ghulam Ali, Jagjit Singh, and Mehdi Hasan.',
        'In his younger years, Arijit Singh worked as a musical assistant for Pritam Chakraborty, Shankar-Ehsaan-Loy, Vishal-Shekhar, and Mithoon.',
        'In 2014, Arijit Singh married Koel Roy, a buddy from his youth. This was his second marriage.',
        'Along with Dadagiri, Arijit also sang the title song for the television soap Madhubala: Ek Ishq Ek Junoon. Along with Ujjaini Mukherjee, he also performed the title song for the Bengali television series Tomay Amay Mile.',
    ]
},]


const Biography = () => {
    const [page, setPage] = useState(Pages[0]);

    return <>
        <>
            <div className=" flex md:flex-row flex-col justify-between bg-gray-900">
                <aside


                    style={{ height: "fit-content" }}
                    className="hidden md:flex w-1/5  sticky  mx-5 top-2 bg-red-700 min-h-screen justify-center shadow-xl  flex-col  gap-4"
                >
                    <div className="flex  flex-row w-full  max-h-screen  text-white pt-3 pl-5   pb-2">
                        <ol className=" flex flex-col w-full pl-5 font-semibold  text-sm justify-between ">
                            <li className="  w-full pl-5 hover:bg-gray-900  text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" onClick={() => setPage(Pages[0])} >Early Life</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" onClick={() => setPage(Pages[1])} >Career</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" onClick={() => setPage(Pages[2])} >Musical Style</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" onClick={() => setPage(Pages[3])} >Personal Life</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" onClick={() => setPage(Pages[4])} >New Worth</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" onClick={() => setPage(Pages[5])} >Controversy</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" onClick={() => setPage(Pages[6])} >Awards</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white my-3 p-3 rounded-l-xl text-xl" onClick={() => setPage(Pages[7])} >Facts</li>

                        </ol>
                    </div>
                </aside>

                <ScrollMenu className="md:hidden" >
                    <div className="md:hidden  bg-red-700 sticky">
                        <ol className=" flex  w-full pl-5 font-semibold  text-md  md:justify-between ">
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl" onClick={() => setPage(Pages[0])} >Early Life</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl" onClick={() => setPage(Pages[1])} >Career</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl" onClick={() => setPage(Pages[2])} >Musical Style</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl" onClick={() => setPage(Pages[3])} >Personal Life</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl" onClick={() => setPage(Pages[4])} >New Worth</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl" onClick={() => setPage(Pages[5])} >Controversy</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl" onClick={() => setPage(Pages[6])} >Awards</li>
                            <li className="  w-full pl-5 hover:bg-gray-900 text-gray-900 hover:text-white  p-3 rounded-xl text-xl" onClick={() => setPage(Pages[7])} >Facts</li>

                        </ol>
                    </div>
                </ScrollMenu>

                <Details {...page} />
            </div>
        </>
    </>
}

export default Biography;
