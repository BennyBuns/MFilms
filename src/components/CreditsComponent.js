import React from 'react';
import {
    Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


function Credits() {

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Credits</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Acting Credits</h2>
                    Beginner's Luck /  Role - Gus / Year - 2022<br/>
                    V/H/S/94 / Role - Gustav (segment "The Wake") / Year - 2021 <br />
                    Immortals Fenyx Rising: The Lost Gods (Video Game) / Role - Zeus (voice) / Year - 2021 <br />
                    Immortals Fenyx Rising: Myths of the Eastern Realm (Video Game) / Year - 2021 <br /> 
                    Immortals Fenyx Rising: A New God (Video Game) / Year - 2020 <br />
                    Immortals Fenyx Rising (Video Game) / Role - Zeus (voice) / Year - 2020 <br />
                    Bitmoji TV (TV Series short) America's Best Bitmoji (2020) / Role - (voice) / Year - 2019 <br />
                    Ghostwriter (TV Series) <br />
                    - The Jungle Ghost, Part 2  <br />
                    - The Jungle Ghost, Part 1 Year - 2019 <br />
                    Assassin's Creed: Odyssey (Video Game) / Role - Sokrates / Year - 2018 <br /> 
                    Taken (TV Series) - Strelochnik (2018) / Role - Conductor / Year - 2018 <br />
                    The Strain (TV Series)
                    - Madness (2016) / Role - Boat Captain / Year - 2016<br />
                    Ride (TV Series)
                    Mr. Griffin
                    - Dark Horse / Role - Mr. Griffin / Year - 2016 <br />
                    - Let It Ride / Role -  Mr. Griffin / Year - 2016 <br />

                    - Distractions and Deceptions ... Mr. Griffin <br />
                    2016Deus Ex: Mankind Divided (Video Game)
                    Additional Voices (voice) <br />
                    2016Houdini and Doyle (TV Mini Series)
                    Rabbi
                    - Necromanteion (2016) ... Rabbi <br />
                    2016Damien (TV Series)
                    Monsignor
                    - Seven Curses (2016) ... Monsignor <br />
                    2014Reign (TV Series)
                    Oliver
                    - Royal Blood (2014) ... Oliver <br />
                    2014Air Crash Investigation (TV Series documentary)
                    First Officer Ketzer 
                    - Imperfect Pitch (2014) / Role -  First Officer Ketzer <br />
                    2013The Great Martian War 1913 - 1917 (TV Movie)
                    Lawrence Hart <br />
                    2013Warehouse 13 (TV Series)
                    Wolford Stallion Club Doorman
                    - The Sky's the Limit (2013) ... Wolford Stallion Club Doorman <br />
                    2013Hit It
                    Warden Cox <br />
                    2010-2012Covert Affairs (TV Series)
                    Noah / Curator
                    - Quicksand (2012) ... Noah
                    - I Can't Quit You, Baby (2010) ... Curator <br />
                    2012A Dark Truth
                    Senator <br />
                    2011Rookie Blue (TV Series)
                    - Bad Moon Rising (2011) / Role - Dr. Klein <br />
                    2011Jesus Henry Christ
                    Proctor #1 <br />
                    2010The Camera and Christopher Merk (Short)
                    James <br />
                    2010The Gospel According to the Blues (TV Movie)
                    Grenabier <br />
                    2009Record (Video short) <br />
                    2008Far Cry 2 (Video Game) (voice) <br />
                    2008Murdoch Mysteries (TV Series)
                    Newsman Louis
                    - The Knockdown (2008) ... Newsman Louis <br />
                    2007King of Sorrow
                    Frank Jennings <br />
                    2007Hearts of War
                    Rabbi Taub <br />
                    2004Snakes & Ladders (TV Series)
                    Manager
                    - The Bling Bling (2004) ... Manager <br />
                    2004The Straitjacket Lottery (Short)
                    Howard Blantyre <br />
                    Red Lipstick / Role - Pishka-The Interior Decorator / Year - 2000 <br />
                   Badge of Fear (Video) / Role - Brock Williams / Year -  1997 <br />
                    Buffalo Heart / Role - Jerimiah / Year - 1996 <br />
                    The Mangler / Role - Mark Jackson / Year - 1995 <br />
                    Night Terrors / Role - Priest (as Daniel E. Matmor) / Year - 1993
                </div>
            </div>
        </div>
    )
}

export default Credits;