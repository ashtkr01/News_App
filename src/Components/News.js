import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Haiti's Prime Minister Ariel Henry resigns as law and order collapse - BBC.com",
          "description": "Ariel Henry agrees to resign after Caribbean leaders held talks in Jamaica.",
          "url": "https://www.bbc.com/news/world-latin-america-68541349",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1852D/production/_132892699_arielhenry.png",
          "publishedAt": "2024-03-12T06:02:37Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "1970-01-01T00:00:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": "NDTV",
          "title": "Airbnb Bans Security Cameras Inside Guest Homes. Here's Why - NDTV",
          "description": null,
          "url": "https://www.ndtv.com/world-news/airbnb-to-ban-security-cameras-inside-guest-homes-to-prioritize-privacy-5222437",
          "urlToImage": null,
          "publishedAt": "2024-03-12T04:02:21Z",
          "content": null
        },
        {
          "source": {
            "id": "business-insider",
            "name": "Business Insider"
          },
          "author": "Katherine Tangalakis-Lippert",
          "title": "Trump suggests Medicare and Social Security benefit cuts on CNBC - Business Insider",
          "description": "Trump may have handed Biden campaign gold by suggesting cuts to entitlement programs like Medicare during a call-in to CNBC's \"Squawk Box\" on Monday.",
          "url": "https://www.businessinsider.com/trump-cutting-medicare-social-security-benefits-2024-3",
          "urlToImage": "https://i.insider.com/65efbd086080194819fee293?width=1200&format=jpeg",
          "publishedAt": "2024-03-12T03:35:00Z",
          "content": "Donald Trump on Monday unintentionally handed President Joe Biden a gift while speaking to CNBC.\r\nWhen asked how the country could cut discretionary spending and his outlook on handling entitlements … [+1644 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Jen Christensen",
          "title": "CDC team to help Chicago officials with response to measles outbreak - CNN",
          "description": "A team of experts from the US Centers for Disease Control and Prevention is expected to arrive in Chicago on Tuesday to help local public health officials manage a measles outbreak there.",
          "url": "https://www.cnn.com/2024/03/11/health/cdc-chicago-measles/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/3168.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-03-12T03:07:00Z",
          "content": "A team of experts from the US Centers for Disease Control and Prevention is expected to arrive in Chicago on Tuesday to help local public health officials manage a measles outbreak there.\r\nThe Chicag… [+5996 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Shayna Jacobs",
          "title": "Trump seeks delay in N.Y. trial pending Supreme Court hearing on immunity - The Washington Post",
          "description": "The Supreme Court in April is set to hear arguments on whether he is immune from criminal prosecution.",
          "url": "https://www.washingtonpost.com/politics/2024/03/11/trump-new-york-criminal-trial-scotus-immunity/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTGXFBW4E3NV2FMVDRKFX545K4.jpg&w=1440",
          "publishedAt": "2024-03-12T03:04:00Z",
          "content": "NEW YORK Donald Trump on Monday sought to delay his New York criminal trial, scheduled to start March 25, with claims related to presidential immunity, which several legal experts described as an att… [+7060 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Detroit Free Press"
          },
          "author": "Tanya Wildt",
          "title": "Powerball winning numbers for Monday, March 11, 2024 - Detroit Free Press",
          "description": "Powerball numbers are in for the Monday, March 11, 2024 drawing as the jackpot climbs to an estimated $532 million.",
          "url": "https://www.freep.com/story/news/local/michigan/2024/03/11/powerball-numbers-monday-march-11-2024/72928679007/",
          "urlToImage": "https://www.freep.com/gcdn/authoring/authoring-images/2023/10/07/PDTF/71101115007-powerball.jpg?crop=3021,1699,x0,y227&width=3021&height=1699&format=pjpg&auto=webp",
          "publishedAt": "2024-03-12T03:00:31Z",
          "content": "The Powerball winning numbers are in for the Monday, March 11 drawing with a jackpot that reached an estimated $532 million ($260.1 million cash value).\r\nThe jackpot is the 17th largest in the game's… [+2731 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": "Reuters",
          "title": "New Zealand says seizing black boxes from LATAM Boeing 787 - Reuters",
          "description": null,
          "url": "https://www.reuters.com/business/aerospace-defense/new-zealand-says-seizing-black-boxes-latam-boeing-787-2024-03-12/",
          "urlToImage": null,
          "publishedAt": "2024-03-12T02:55:00Z",
          "content": null
        },
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": null,
          "title": "Bueckers helps UConn rout G'town for 22nd Big East tourney title - ESPN",
          "description": "Paige Bueckers scored 27 points and had five blocks to help No. 10 UConn beat Georgetown 78-42 on Monday night to win its 22nd Big East Tournament title.",
          "url": "https://www.espn.com/womens-college-basketball/story/_/id/39711680/bueckers-helps-uconn-dominate-gtown-22nd-big-east-tourney-title",
          "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0122%2Fr1280698_2_1296x729_16%2D9.jpg",
          "publishedAt": "2024-03-12T02:30:00Z",
          "content": "Mar 11, 2024, 09:30 PM ET\r\nUNCASVILE, Conn. -- A year after missing out because of an injury, Paige Bueckers returned to make sure the UConn Huskies ended another Big East Tournament with a trophy in… [+3599 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NBCSports.com"
          },
          "author": "Mike Florio",
          "title": "Bengals will release RB Joe Mixon after seven seasons - NBC Sports",
          "description": "Cincinnati moves on after seven years with Mixon.",
          "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/bengals-will-release-rb-joe-mixon-after-seven-seasons",
          "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/4ee4237/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F69%2F68%2F2c68d1014761b3ab9f09d45d2a55%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D22242761",
          "publishedAt": "2024-03-12T02:20:45Z",
          "content": "After seven seasons in Cincinnati, Joe Mixons time with the Bengals is ending.\r\nThe Bengals will release Mixon, PFT has confirmed.\r\nMixon was a second-round pick in 2017. He had four 1,000-yard rushi… [+650 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "VentureBeat"
          },
          "author": "Carl Franzen",
          "title": "Midjourney debuts feature for generating consistent characters across multiple gen AI images - VentureBeat",
          "description": "As the feature progresses and is refined, it could take Midjourney further from being a cool toy or ideation source into more of a professional tool.",
          "url": "https://venturebeat.com/ai/midjourney-debuts-feature-for-generating-consistent-characters-across-multiple-gen-ai-images/",
          "urlToImage": "https://venturebeat.com/wp-content/uploads/2024/03/Untitled-design-5.png?w=1200&strip=all",
          "publishedAt": "2024-03-12T02:10:00Z",
          "content": "Join leaders in Boston on March 27 for an exclusive night of networking, insights, and conversation. Request an invite here.\r\nThe popular AI image generating service Midjourney has deployed one of it… [+1301 chars]"
        },
        {
          "source": {
            "id": "politico",
            "name": "Politico"
          },
          "author": null,
          "title": "Bloodbath at RNC: Trump team slashes staff at committee - POLITICO",
          "description": null,
          "url": "https://www.politico.com/news/2024/03/11/bloodbath-at-rnc-trump-team-slashes-staff-at-committee-00146368",
          "urlToImage": null,
          "publishedAt": "2024-03-12T02:07:01Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Sheila Chiang",
          "title": "U.S. curbs on China to rise as 'decoupling is really in full force,' expert warns, amid possible TikTok ban - CNBC",
          "description": "The U.S. has been ramping up pressure on Chinese companies in recent years, especially in the semiconductor, EV and biotech sectors.",
          "url": "https://www.cnbc.com/2024/03/12/-us-curbs-on-china-to-rise-with-decoupling-in-full-force-expert-warns.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107385370-1710139501930-gettyimages-1039282538-ake00026.jpeg?v=1710139534&w=1920&h=1080",
          "publishedAt": "2024-03-12T01:42:00Z",
          "content": "USA and China trade relations, cooperation strategy. US America and China flags on chess king on a chessboard.\r\nThe U.S. is likely to impose more curbs to check competition from China as \"the decoupl… [+2862 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Jeremy Herb",
          "title": "‘This is not a witch hunt’: Takeaways from CNN’s sit-down with ex-Trump employee who unwittingly moved classified docs - CNN",
          "description": "Brian Butler, a former Mar-a-Lago worker referenced as “Trump Employee Number 5” in the classified documents indictment of Donald Trump, spoke exclusively with CNN on Monday about what he saw at the former president’s private club and the subsequent fallout a…",
          "url": "https://www.cnn.com/2024/03/11/politics/takeaways-cnn-exclusive-interview-trump-employee-5-mar-a-lago/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/still-20453789-4109076-333-still.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-03-12T01:33:00Z",
          "content": "Brian Butler, a former Mar-a-Lago worker referenced as Trump Employee Number 5 in the classified documents indictment of Donald Trump, spoke exclusively with CNN on Monday about what he saw at the fo… [+7302 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Elizabeth Stanton",
          "title": "Kate Middleton ‘humiliated’ but ‘quite happy’ to accept blame in photo edit scandal: royal expert - Fox News",
          "description": "Kate Middleton's edited family photo has caused a continued stir about her health and lack of public appearances, as royal expert Neil Sean breaks down why she took the brunt of the scrutiny.",
          "url": "https://www.foxnews.com/entertainment/kate-middleton-humiliated-quite-happy-accept-blame-photo-edit-scandal-royal-expert",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/03/KateMiddleton3.jpg",
          "publishedAt": "2024-03-12T01:28:00Z",
          "content": "Kate Middletons response to her edited family photo has appeared to only cause more confusion.\r\nAfter her Mothers Day photo shared on social media was pulled from news agencies amid allegations of ma… [+8297 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Florida settles lawsuit over LGBT education bill - BBC.com",
          "description": "A new settlement clarifies the scope of Florida's parental rights bill, dubbed by critics as \"Don't Say Gay\".",
          "url": "https://www.bbc.com/news/world-us-canada-68541059",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13E15/production/_132892418_gettyimages-1239175549.jpg",
          "publishedAt": "2024-03-12T00:58:49Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "TMZ"
          },
          "author": null,
          "title": "Steve-O Defends Jimmy Kimmel's Joke About Robert Downey Jr's Addiction Issues - TMZ",
          "description": null,
          "url": "https://www.tmz.com/2024/03/11/steve-o-defends-jimmy-kimmel-robert-downey-jr-addiction-joke-oscars/",
          "urlToImage": null,
          "publishedAt": "2024-03-12T00:52:00Z",
          "content": "{\"en\":{\"access_disabled\":\"Internet Access has been disabled on this device\",\"code\":\"Code\",\"custom_block_list\":\"it is on a custom block list\",\"email\":\"Email\",\"file_ext_blocked\":\"the file extension is … [+4331 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Post"
          },
          "author": "Christian Arnold",
          "title": "Saquon Barkley fires back at 'hater' Tiki Barber after 'dead to me' jab - New York Post ",
          "description": "The over-the-top comments quickly spread on social media and made their way back to Barkley, who, after agreeing to a three-year deal with Philadelphia",
          "url": "https://nypost.com/2024/03/11/sports/saquon-barkley-fires-back-at-hater-tiki-barber-after-dead-to-me-jab/",
          "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/03/newspress-collage-447shthay-1710202258925.jpg?quality=75&strip=all&1710187889&w=1024",
          "publishedAt": "2024-03-12T00:42:09Z",
          "content": "Saquon Barkey didnt take Tiki Barbers jabs at him lying down.\r\nThe WFAN afternoon host tore into the now-Eagles running back for the decision to sign with rival Philadelphia, saying that the former s… [+3165 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Yahoo Sports Staff",
          "title": "NFL 2024 free agency: Kirk Cousins to Falcons, Brian Burns to Giants, and more news, reports, rumors - Yahoo Sports",
          "description": "Follow all the developments right here with Yahoo Sports.",
          "url": "https://sports.yahoo.com/nfl-2024-free-agency-kirk-cousins-to-falcons-brian-burns-to-giants-and-more-news-reports-rumors-224439496.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/wAtECQtIzVSV4QaQL3EXAA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02Nzk-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/130d2150-dcab-11ee-bddf-2c9cad6b5444",
          "publishedAt": "2024-03-12T00:26:00Z",
          "content": "NFL free agency is here! Stay updated with Yahoo Sports and learn everything you need to know right here.\r\nFantasy reaction to NFL free agency\r\nWhat do all the moves mean from a fantasy perspective? … [+6558 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Amy Capetta",
          "title": "Masks work, telehealth is here to stay — and other health lessons we've learned since the pandemic started 4 years ago - Yahoo Life",
          "description": "It’s been four years since the beginning of the COVID-19 pandemic in the U.S. Here are six important lessons we’ve learned.",
          "url": "https://www.yahoo.com/lifestyle/masks-work-telehealth-is-here-to-stay--and-other-health-lessons-weve-learned-since-the-pandemic-started-4-years-ago-001440922.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/uLUoWx6wV5L_brTPWfp5mQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/c9b09460-dfed-11ee-bf5f-903a6a6b6285",
          "publishedAt": "2024-03-12T00:14:00Z",
          "content": "This month marks the four-year anniversary of the beginning of the COVID-19 pandemic in the U.S. During the months on lockdown, millions of Americans were grappling with uncertainty, with worries ran… [+8358 chars]"
        }
    ];    
    constructor(){
        super();
        this.setState = {
            articles : this.articles,
            loading : false,
        }
    }
    render() {
        return (
            <div className="container my-4">
                <h2>News App - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="Rahul" description="Youth" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/1852D/production/_132892699_arielhenry.png"
                        newsUrl = "Hello"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Rahul" description="Youth" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/1852D/production/_132892699_arielhenry.png"
                        newsUrl = "Hello"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Rahul" description="Youth" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/1852D/production/_132892699_arielhenry.png"
                        newsUrl = "Hello"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Rahul" description="Youth" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/1852D/production/_132892699_arielhenry.png"
                        newsUrl = "Hello"/>
                    </div>
                </div>
            </div>
        )
    }
}
