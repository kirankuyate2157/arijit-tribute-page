
import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Album from './Album';
import Name from './Name';

const data = [
    {
        album: 'arijit hit',
        image: 'https://d2r2ijn7njrktv.cloudfront.net/apnlive/uploads/2022/04/29114513/as1.jpg',
        music: [{
            name: 'Dil Chaspiya',
            duration: '1.43'
        }, {
            name: 'Palat – Tera Hero Idhar Hai',
            duration: '3.13'
        }, {
            name: 'Luv Ju...',
            duration: '1.53'
        }, {
            name: 'Mere Yaaraa...',
            duration: '2.44'
        }, {
            name: 'Desh Mere...',
            duration: '2.12'
        }, {
            name: 'Jo Tum Aa Gaye Ho..',
            duration: '2.51'
        }, {
            name: 'Thode Kam Ajnabi..',
            duration: '2.53'
        }, {
            name: 'Pagglait..',
            duration: '2.33'
        }, {
            name: 'Dil Udd Ja Re..',
            duration: '1.33'
        }, {
            name: 'Phire Faqeera..',
            duration: '1.44'
        }, {
            name: 'Oh Saaiyaan".',
            duration: '2.18'
        }, {
            name: 'Hardum Humdum..',
            duration: '2.26'
        }, {
            name: 'Aabaad Barbaad..',
            duration: '2.33'
        }, {
            name: 'Shukriya..',
            duration: '1.59'
        }, {
            name: 'Khulke Jeene Ka..',
            duration: '2.39'
        }, {
            name: 'Haan Tum Ho..',
            duration: '1.43'
        }, {
            name: 'Chhapaak..',
            duration: '1.55'
        }, {
            name: 'Khulne Do..',
            duration: '2.10'
        }, {
            name: 'Dua Karo..',
            duration: '2.43'
        }, {
            name: 'Heeriye..',
            duration: '2.34'
        }, {
            name: 'Udanchoo.',
            duration: '2.22'
        }, {
            name: 'Bairaagi..',
            duration: '2.43'
        }, {
            name: 'O Saathi..',
            duration: '2.05'
        },
        ]
    },

    {
        album: 'Rashtra Kavach Om',
        image: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Rashtra_Kavach_Om_poster.jpg',
        music: [{
            name: 'Seher..',
            duration: '2.45'
        },]
    }, {
        album: 'Ittu Si Baat',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/ff/Ittu_Si_Baat_poster_1.jpg',
        music: [{
            name: 'Sun Bhi Le',
            duration: '2.52'
        },
        ]
    }, {
        album: 'Samrat Prithviraj',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/61/Samrat_Prithviraj_poster.jpg',
        music: [{
            name: 'Makhmali',
            duration: '2.56'
        },]
    }, {
        album: 'Bhool Bhulaiyaa 2',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/23/Bhool_Bhulaiyaa_2_film_poster.jpg',
        music: [{
            name: 'Hum Nashe Mein Toh Nahin',
            duration: '2.34'
        }, {
            name: 'Mere Dholna',
            duration: '2.51'
        }, {
            name: 'Ami Je Tomar',
            duration: '2.23'
        },]
    }, {
        album: 'Chitrakut',
        image: 'https://d2r2ijn7njrktv.cloudfront.net/apnlive/uploads/2022/04/29114513/as1.jpg',
        music: [{
            name: 'Maan Le',
            duration: '2.01'
        },]
    }, {
        album: 'Runway 34',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/79/Runway_34_poster.jpg',
        music: [{
            name: 'Mitra Re',
            duration: '2.56'
        },]
    }, {
        album: 'Bachchan Pandey',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Bachchhan_Paandey_poster.jpg',
        music: [{
            name: 'Heer Ranjhana...',
            duration: '2.45'
        },]
    }, {
        album: 'Radhe Shyam',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Radhe_Shyam.jpg',
        music: [{
            name: 'Aashiqui Aa Gayi',
            duration: '2.52'
        }, {
            name: 'Soch Liya',
            duration: '2.33'
        },
        ]
    }, {
        album: 'Gangubai Kathiawadi',
        image: 'https://upload.wikimedia.org/wikipedia/en/8/89/Gangubai_Kathiawadi_film_poster.jpg',
        music: [{
            name: 'Muskurahat',
            duration: '2.56'
        },]
    }, {
        album: 'Badhaai Do',
        image: 'https://upload.wikimedia.org/wikipedia/en/9/99/Badhaai_Do_film_poster.jpg',
        music: [{
            name: 'Atak Gaya..',
            duration: '2.56'
        },]
    }, {
        album: 'Aashiqui 2',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Aashiqui_2_%28Poster%29.jpg',
        music: [{
            name: 'Tum Hi Ho',
            duration: '2.56'
        }, {
            name: 'Meri Aashiqui',
            duration: '2.56'
        }, {
            name: 'Chahun Main Ya Naa',
            duration: '2.56'
        }, {
            name: 'Hum Mar Jayenge',
            duration: '2.56'
        }, {
            name: 'Milne Hai Mujhse Aayi',
            duration: '2.56'
        }, {
            name: 'Aasan Nahin Yahan',
            duration: '2.56'
        },]
    }, {
        album: 'Hate Story 2',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/40/Hate-story-2-june6.jpg',
        music: [{
            name: 'Aaj Phir..',
            duration: '2.45'
        }, {
            name: 'Aaj Phir.. (Remix version)',
            duration: '1.55'
        }, {
            name: 'Hai Dil Ye Mera..',
            duration: '2.06'
        }, {
            name: 'Hai Dil Ye Mera.. (Remix Version)',
            duration: '2.55'
        },]
    }, {
        album: 'Khamoshiyan',
        image: 'https://upload.wikimedia.org/wikipedia/en/1/10/Khamoshiyan.Jpg',
        music: [{
            name: 'Khamoshiyan',
            duration: '2.45'
        }, {
            name: 'Khamoshiyan.. (Unplugged Version)',
            duration: '2.51'
        }, {
            name: 'Baatein Ye Kabhi Na.. (Male Version)',
            duration: '2.51'
        }, {
            name: 'Tu Har Lamha.. ',
            duration: '2.51'
        },]
    }, {
        album: 'Dilwale',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/df/Dilwale.jpg',
        music: [{
            name: 'Gerua',
            duration: '2.52'
        }, {
            name: 'Janam Janam',
            duration: '2.52'
        }, {
            name: 'Theme (DJ Chetas Mix)',
            duration: '2.52'
        }, {
            name: 'Tukur Tukur (Solo version)',
            duration: '2.52'
        }, {
            name: 'Tukur Tukur (Celebration Mix)',
            duration: '2.52'
        },
        ]
    }, {
        album: 'Manob Jomin',
        image: 'https://www.suntiros.com/wp-content/uploads/2018/05/Arijit-Singh-Cute-Lovely-Images.jpg',
        music: [{
            name: 'Mon Re Krishikaj Janona',
            duration: '2.56'
        },]
    }, {
        album: 'Bismillah',
        image: 'https://cdns-images.dzcdn.net/images/cover/fed71d45335f63b28662aef3c88e9df2/264x264.jpg',
        music: [{
            name: 'Bismillah Title Track',
            duration: '2.45'
        }, {
            name: 'Aajke Raatey',
            duration: '2.51'
        },]
    }, {
        album: 'X=Prem',
        image: 'https://cdns-images.dzcdn.net/images/cover/1ef811b41feb81c71f236beeaf34d54d/264x264.jpg',
        music: [{
            name: 'Bhalobashar Morshum',
            duration: '2.52'
        },
        ]
    }, {
        album: 'Kishmish',
        image: 'https://c.saavncdn.com/576/Arijit-Sings-Hindi-2018-20180424-500x500.jpg',
        music: [{
            name: 'Oboseshe',
            duration: '2.56'
        },]
    }, {
        album: 'Raavan',
        image: 'https://i.scdn.co/image/ab67616d0000b2731aa5adad8593923dcdf1a7d0',
        music: [{
            name: 'Mon Re Krishikaj Janona',
            duration: '2.56'
        },]
    }, {
        album: '8/12 Binay Badal Dinesh',
        image: 'https://d2r2ijn7njrktv.cloudfront.net/apnlive/uploads/2022/04/29114513/as1.jpg',
        music: [{
            name: 'Swadhin Hobe Desh',
            duration: '2.56'
        },]
    }, {
        album: 'Ei Ami Renu',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Ei_Ami_Renu_%28film%29_poster.gif',
        music: [{
            name: 'Chol Choley Jaai',
            duration: '2.56'
        },]
    }, {
        album: 'Tiki-Taka',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Tiki-Taka_%28film%29.jpg',
        music: [{
            name: 'Nouka Dile Na',
            duration: '2.45'
        },]
    }, {
        album: 'Love Aaj Kal Porshu',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Poster_of_Love_Aaj_Kal_Porshu.jpg',
        music: [{
            name: 'Aye Dekhe Jaa',
            duration: '2.52'
        },
        ]
    }, {
        album: 'Dwitiyo Purush',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Dwitiyo_Purush_poster.jpg',
        music: [{
            name: 'Abar Phire Ele',
            duration: '2.30'
        },]
    }, {
        album: 'Gotro',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Gotro_Poster.jpg/480px-Gotro_Poster.jpg',
        music: [{
            name: 'Maa',
            duration: '2.41'
        },]
    }, {
        album: 'Bornoporichoy',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Bornoporichoy_Film.jpg',
        music: [{
            name: 'Bishonno Chimney',
            duration: '2.59'
        },]
    },
    {
        album: 'Bijoya',
        image: 'https://upload.wikimedia.org/wikipedia/en/8/87/Bijoya_Bengali_film_poster.jpg',
        music: [{
            name: 'Tomar Pasher Desh',
            duration: '2.56'
        },]
    }, {
        album: 'Tubelight',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/04/Tubelight_Poster.jpg',
        music: [{
            name: 'Radio..',
            duration: '2.45'
        },]
    }, {
        album: 'Meri Pyaari Bindu',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Maana_Ke_Hum_Yaar_Nahin.jpg',
        music: [{
            name: 'Maana Ke Hum Yaar Nahin',
            duration: '2.52'
        },
        ]
    }, {
        album: 'Sultan',
        image: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Sultan_film_poster.jpg',
        music: [{
            name: 'Jag Ghoomeya',
            duration: '2.56'
        },]
    }, {
        album: 'Kick',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Kick_%282014_film%29_Official_release_poster.jpg',
        music: [{
            name: 'Tu Hi Tu',
            duration: '2.56'
        },]
    }, {
        album: 'Murder 3',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Murder_3.jpg',
        music: [{
            name: 'Teri Jhuki Nazar',
            duration: '2.56'
        },]
    }, {
        album: 'Desi Boyz',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/f5/11nov_desiboyz-poster01.jpg',
        music: [{
            name: 'Desi Boyz',
            duration: '2.56'
        },]
    }, {
        album: 'Crook',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Crook2.jpg',
        music: [{
            name: 'Mere Bina',
            duration: '2.45'
        },]
    }, {
        album: 'Tu Jhoothi Main Makkaar',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Tu_Jhoothi_Main_Makkaar_Title_Card.jpeg',
        music: [{
            name: 'TBA....',
            duration: '2.43'
        },
        ]
    }, {
        album: 'Shehzada',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Shehzada_2023_film_poster.jpg',
        music: [{
            name: 'Chedkhaniyan',
            duration: '2.56'
        },]
    }, {
        album: 'Pathaan',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg',
        music: [{
            name: 'Jhoome Jo Pathaan',
            duration: '2.56'
        },]
    }, {
        album: 'Salaam Venky',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Salaam_Venky.jpg',
        music: [{
            name: 'Jo Tum Saath Ho',
            duration: '2.56'
        },]
    }, {
        album: 'Freddy',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/cb/Freddy_Official_Poster.jpg',
        music: [{
            name: 'Kaala Jaadu',
            duration: '2.56'
        },]
    }, {
        album: 'Bhediya',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/29/Bhediya_film_poster.jpg',
        music: [{
            name: 'Apna Bana Le',
            duration: '2.45'
        },]
    }, {
        album: 'Thank God',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/65/Thank_God_film_poster.jpg',
        music: [{
            name: 'Thank God - Title Track',
            duration: '2.33'
        },
        ]
    }, {
        album: 'Code Name: Tiranga',
        image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Code_Name-_Tiranga_poster.jpg',
        music: [{
            name: 'Yaar Ve..',
            duration: '2.56'
        },]
    }, {
        album: 'Maja Ma',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/65/Maja_Ma_Poster.jpg',
        music: [{
            name: 'Kacchi Doriyaan..',
            duration: '2.49'
        },]
    }, {
        album: 'Dhokha: Round D Corner',
        image: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Dhokha_Round_D_Corner_poster.jpg',
        music: [{
            name: 'Mahi Mera Dil..',
            duration: '2.56'
        },]
    }, {
        album: 'Atithi Bhooto Bhava',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/27/Atithi_Bhooto_Bhava_Official_Poster.jpg',
        music: [{
            name: 'Paakhi Hua Re',
            duration: '2.56'
        },]
    }, {
        album: 'Brahmāstra Part One: Shiva',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/40/Brahmastra_Teaser.jpeg',
        music: [{
            name: 'Kesariya',
            duration: '2.45'
        }, {
            name: 'Deva Deva',
            duration: '2.51'
        }, {
            name: 'Dance Ka Bhoot',
            duration: '2.42'
        }, {
            name: 'Rasiya Reprise',
            duration: '2.58'
        },]
    }, {
        album: 'Laal Singh Chaddha',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/70/Laal_Singh_Chaddha.jpg',
        music: [{
            name: 'Phir Na Aisi Raat Aayegi',
            duration: '2.52'
        }, {
            name: 'Tur Kalleyan',
            duration: '2.55'
        }, {
            name: 'Tere Hawaale',
            duration: '2.42'
        },
        ]
    }, {
        album: 'Raksha Bandhan',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Raksha_Bandhan_film_poster.jpg',
        music: [{
            name: 'Dhaagon Se Baandhaa',
            duration: '2.56'
        },]
    }, {
        album: 'Darlings',
        image: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Darlings_poster.jpg',
        music: [{
            name: 'La Ilaaj',
            duration: '2.21'
        },]
    }, {
        album: 'Shamshera',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/54/Shamshera_poster.jpg',
        music: [{
            name: 'Fitoor.."',
            duration: '2.53'
        },]
    }, {
        album: 'HIT: The First Case',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/57/HIT-_The_First_Case_poster.jpg',
        music: [{
            name: 'Kitni Haseen Hogi',
            duration: '2.56'
        },]
    }, {
        album: 'Bismillah',
        image: 'https://cdns-images.dzcdn.net/images/cover/fed71d45335f63b28662aef3c88e9df2/264x264.jpg',
        music: [{
            name: 'Bismillah Title Track',
            duration: '2.45'
        }, {
            name: 'Aajke Raatey',
            duration: '2.51'
        },]
    }, {
        album: 'X=Prem',
        image: 'https://cdns-images.dzcdn.net/images/cover/1ef811b41feb81c71f236beeaf34d54d/264x264.jpg',
        music: [{
            name: 'Bhalobashar Morshum',
            duration: '2.52'
        },
        ]
    }, {
        album: 'Kishmish',
        image: 'https://c.saavncdn.com/576/Arijit-Sings-Hindi-2018-20180424-500x500.jpg',
        music: [{
            name: 'Oboseshe',
            duration: '2.56'
        },]
    }, {
        album: 'Raavan',
        image: 'https://i.scdn.co/image/ab67616d0000b2731aa5adad8593923dcdf1a7d0',
        music: [{
            name: 'Mon Re Krishikaj Janona',
            duration: '2.56'
        },]
    }, {
        album: '8/12 Binay Badal Dinesh',
        image: 'https://d2r2ijn7njrktv.cloudfront.net/apnlive/uploads/2022/04/29114513/as1.jpg',
        music: [{
            name: 'Swadhin Hobe Desh',
            duration: '2.56'
        },]
    },]





const Songs = () => {
    const [songs, setSongs] = useState(data[0]);



    function Click(i) {
        setSongs(data[i]);
    }

    return (
        <>
            <div className=" md:px-28  w-full bg-gray-900 flex " >
                <div className="  w-3/4 " >
                    <div className="py-8 md:px-8 px-5 font-bold text-red-700 text-2xl md:text-4xl">SONGS
                    </div><hr />
                    <div className=" ">
                        <ul className="divide-y divide-red-500 flex flex-col flex-wrap" >
                            <Scrollbars style={{ height: 650 }}>

                                {
                                    songs.music.map((list, index) => (
                                        <Name {...{ ...list, index }} />

                                    ))
                                }

                            </Scrollbars>
                        </ul>

                    </div>
                </div>

                <div className=" w-1/3 ">
                    <div className="py-8 md:px-8 px-5 font-bold text-red-700 text-2xl md:text-4xl">ALBUMS</div>
                    <Scrollbars style={{ height: 650 }} className=" onClick={handleClick} ">
                        {data.map((alb, index) => (
                            <button onClick={() => Click(index)}>



                                <Album  {...alb} />
                            </button>
                        ))}

                    </Scrollbars>
                </div>
            </div>

        </>
    )
}

export default Songs;