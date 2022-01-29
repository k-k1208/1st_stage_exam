import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <header className="w-full fixed z-50 bg-white">
          <nav>
            <div className="flex">
              <div className="h-20 w-1/4 border-2 border-solid border-black relative">
                <Image src="/logo.png"  layout="fill" objectFit='contain' alt="fwywdロゴ" className='object-left'/>
              </div>
              <ul className="ml-auto  w-1/4 flex justify-between  items-center space-x-4 mr-10">
                  <li className="text-lg hover:underline"><Link href="/#ABOUT"><a className='text-[#008c8d]'>ABOUT</a></Link></li>
                  <li className="text-lg hover:underline"><Link href="/#SKILLS"><a className='text-[#008c8d]'>SKILLS</a></Link></li>
                  <li className="text-lg hover:underline"><Link href="/#VALUES"><a className='text-[#008c8d]'>VALUES</a></Link></li>
                  <li className="text-lg hover:underline"><Link href="/#FUTURE"><a className='text-[#008c8d]'>FUTURE</a></Link></li>
              </ul>
            </div>
          </nav>
      </header>
    
    <section className="pt-20 w-full h-[570px] relative mb-10 bg-[#6bc2c3]">
        <div className="flex w-full h-full">
            <div className="w-1/3 absolute top-2/4">
                <h1 className="text-4xl pl-20 text-left tracking-widest text-white font-bold">メインタイトル</h1>
                <h2 className="text-2xl pl-20 text-left tracking-widest text-white/75 font-bold">サブタイトル</h2>
            </div>
          <div className="ml-auto w-2/5 mt-6 mb-6 relative h-5/6 mr-10 border-2 border-solid border-black">
            <Image src="/hero.png" layout="fill" objectFit='contain' alt="heroイメージ"/> 
          </div>  
        </div>   
    </section>

    <div id="valuesFutureZindex" className="relative z-0">
      <section id="ABOUT" className="pt-20 -mt-20 pb-10 bg-[url('/bg-about.png')]  w-full h-[570px] border-2 border-solid border-yellow-900 ">
        <h2 className="text-2xl text-center font-bold text-[#384359] border-2 border-solid border-yellow-900 mb-10">私について <span className="text-lg text-[#008c8d] font-normal">ABOUT</span></h2>

        <div className="flex justify-center  space-x-14 mb-20 relative z-40">
            <div id="hobby" className="w-1/5 border-2 border-solid border-yellow-900">
                <div className="flex justify-center relative w-auto h-[170px] mb-4">
                    <Image src="/about-1.png" layout="fill" objectFit='contain' className="w-1/5 border-2 border-solid border-blue-900"/>
                </div>
                <h3 className="text-center text-2xl text-[#008c8d] font-bold mb-4">趣味</h3>
                <p className="text-[#384359]">
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                </p>
            </div>
            
            <div id="favoriteFood" className="w-1/5 border-2 border-solid border-yellow-900">
                <div className="flex justify-center relative w-auto h-[170px] mb-4">
                    <Image src="/about-2.png" layout="fill" objectFit='contain' />
                </div>
                <h3 className="text-center text-2xl text-[#008c8d] font-bold mb-4">好きな食べ物</h3>
                <p className="text-[#384359]">
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                </p>
            </div>
            
            <div id="personality" className="w-1/5 border-2 border-solid border-yellow-900">
                <div className="flex justify-center relative w-auto h-[170px] mb-4">
                    <Image src="/about-3.png" layout="fill" objectFit='contain' />
                </div>
                <h3 className="text-center text-2xl text-[#008c8d] font-bold mb-4">性格</h3>
                <p className="text-[#384359]">
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                    テキストテキストテキストテキスト
                </p>
            </div>
        </div> 
      </section>


      <section id="SKILLS" className="w-full h-[800px] pt-20 -mt-20 mb-10 pb-28 border-2 border-solid border-black bg-transparent bg-[url('/bg-skills.png')] bg-no-repeat bg-[length:100%_100%] z-30">
          <div className="flex w-full h-full border-2 border-solid border-pink-800">
              <div className="w-2/4 relative border-2 border-solid border-black ml-20">
                <Image src="/skill.png" layout="fill" objectFit='contain'/>
              </div>
              <div className="ml-10 border-2 border-solid border-gray w-2/4 mr-20">
                  <h2 className="text-2xl w-auto font-bold text-[#384359]">スキル <span className="text-lg text-[#008c8d] font-normal">SKILLS</span></h2>
                  <p className="w-2/3 text-[#384359] ">
                      テキストテキストテキストテキスト
                      テキストテキストテキストテキスト
                      テキストテキストテキストテキスト
                      テキストテキストテキストテキスト
                      テキストテキストテキストテキスト
                      テキストテキストテキストテキスト
                      テキストテキストテキストテキスト
                      テキストテキストテキストテキスト
                      テキストテキストテキストテキスト
                      テキストテキストテキストテキスト
                  </p>
                  <div className='bg-white rounded-lg mt-4'>
                    <div className="relative pt-8">
                      <div className="mb-2 items-center justify-between ml-10">
                        <div>
                          <span className="text-lg inline-block py-1 uppercase rounded-full text-[#008c8d]">
                            SKILLSKILL
                          </span>
                        </div>
                          <div className="flex relative items-center">
                            <div className="overflow-hidden h-[18px] w-3/4 flex rounded bg-teal-500/40 relative">
                              <div style={{ width: "40%" }} className="shadow-none flex flex-col whitespace-nowrap text-white justify-center bg-teal-500"></div>
                            </div>
                            <span className="h-full ml-4 text-lg inline-block text-[#008c8d]">
                              40%
                            </span>
                          </div>
                      </div>
                      
                    </div>
                    <div className="relative pt-1">
                      <div className="mb-2 items-center justify-between ml-10">
                        <div>
                          <span className="text-lg inline-block py-1 uppercase rounded-full text-[#008c8d]">
                            SKILLSKILL
                          </span>
                        </div>
                          <div className="flex relative items-center">
                            <div className="overflow-hidden h-[18px] w-3/4 flex rounded bg-teal-500/40 relative">
                              <div style={{ width: "40%" }} className="shadow-none flex flex-col whitespace-nowrap text-white justify-center bg-teal-500"></div>
                            </div>
                            <span className="h-full ml-4 text-lg inline-block text-[#008c8d]">
                              40%
                            </span>
                          </div>
                      </div>
                      
                    </div>
                    <div className="relative pt-1">
                      <div className="mb-2 items-center justify-between ml-10">
                        <div>
                          <span className="text-lg inline-block py-1 uppercase rounded-full text-[#008c8d]">
                            SKILLSKILL
                          </span>
                        </div>
                          <div className="flex relative items-center">
                            <div className="overflow-hidden h-[18px] w-3/4 flex rounded bg-teal-500/40 relative">
                              <div style={{ width: "40%" }} className="shadow-none flex flex-col whitespace-nowrap text-white justify-center bg-teal-500"></div>
                            </div>
                            <span className="h-full ml-4 text-lg inline-block text-[#008c8d]">
                              40%
                            </span>
                          </div>
                      </div>
                      
                    </div>
                    <div className="relative pt-1 pb-8">
                      <div className="mb-2 items-center justify-between ml-10">
                        <div>
                          <span className="text-lg inline-block py-1 uppercase rounded-full text-[#008c8d]">
                            SKILLSKILL
                          </span>
                        </div>
                          <div className="flex relative items-center">
                            <div className="overflow-hidden h-[18px] w-3/4 flex rounded bg-teal-500/40 relative">
                              <div style={{ width: "40%" }} className="shadow-none flex flex-col whitespace-nowrap text-white justify-center bg-teal-500"></div>
                            </div>
                            <span className="h-full ml-4 text-lg inline-block text-[#008c8d]">
                              40%
                            </span>
                          </div>
                      </div>
                      
                    </div>
                  </div>
                    
                  
              </div>
          </div>
      </section>
    

      <section id="VALUES" className="w-full h-[570px] pt-20 -mt-20 pb-10">
          <h2 className="text-2xl text-center font-bold text-[#384359]">価値観 <span className="text-lg text-[#008c8d] font-normal">VALUES</span></h2>

          <div className="flex justify-center h-full">
              <div className="space-x-14 inline-flex w-4/6 h-auto justify-center  bg-white  border-2 border-solid  border-black rounded-lg relative z-20">
                  <article className="w-1/4 border-2 border-solid border-gray">
                      <div className="flex justify-center h-[200px] relative mb-8">
                          <Image src="/value1.png" layout="fill" objectFit='contain' className="border-2 border-solid border-gray"/>
                      </div>
                      
                      <h3 className="text-[#384359] text-center mb-8">価値観01</h3>
                      <p className="text-[#384359]">
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                      </p>
                  </article>
                  
                  <article className="w-1/4 border-2 border-solid border-gray">
                      <div className="flex justify-center h-[200px] relative mb-8">
                          <Image src="/value2.png" layout="fill" objectFit='contain' className="w-1/2 border-2 border-solid border-gray"/>
                      </div>
                      <h3 className="text-[#384359] text-center mb-8">価値観02</h3>
                      <p className="text-[#384359]">
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                      </p>
                  </article>

                  <article className="w-1/4 border-2 border-solid border-gray">
                      <div className="flex justify-center h-[200px] relative mb-8">
                          <Image src="/value3.png" layout="fill" objectFit='contain' className="w-1/2 border-2 border-solid border-gray"/>
                      </div>
                      <h3 className="text-[#384359] text-center mb-8">価値観03</h3>
                      <p className="text-[#384359]">
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                          テキストテキストテキストテキスト
                      </p>
                  </article>
              </div>
          </div>        
      </section>

      <section className="z-10 h-[570px] w-full  relative flex space-x-8 justify-center items-center pt-40 -mt-32 bg-[url('/bg-future.png')] bg-[length:100%_100%] pb-10">
          <div className=" border-2 border-solid border-gray w-1/3 relative">
              <h2 id="FUTURE" className=" pt-20 -mt-20 text-2xl font-bold text-[#384359] border-2 border-solid border-gray">3年後にやりたいこと <span className="text-lg text-[#008c8d] font-normal">FUTURE</span></h2>
              <p className="text-[#384359] border-2 border-solid border-gray">
                  テキストテキストテキストテキスト
                  テキストテキストテキストテキスト
                  テキストテキストテキストテキスト
                  テキストテキストテキストテキスト
                  テキストテキストテキストテキスト
                  テキストテキストテキストテキスト
                  テキストテキストテキストテキスト
                  テキストテキストテキストテキスト
                  テキストテキストテキストテキスト
                  テキストテキストテキストテキスト
              </p>
          </div>
          <div className="relative h-[275px] w-[500px]  border-2 border-solid border-black ml-20">
            <Image src="/future.png" layout="fill" objectFit='contain' className=" border-2 border-solid border-gray"/>
          </div>
      </section>
    </div>

    <footer className="text-center bg-[#262c3a] h-[405px]">
      <div className="pt-10">
        <small className="text-white">CREATED BY <span className="text-lg">名前 太郎</span></small>
          <div className="flex mt-10 mb-10 relative h-[120px]">
              <Image src="/logo_white.png" layout="fill" objectFit='contain'/>
          </div>
          
          <div className="flex relative justify-center space-x-4">
              <div className="w-6 h-6 relative"> 
                <Link href="https://twitter.com/"><a><Image src="/twitter.png" layout="fill" objectFit='contain' /></a></Link> 
              </div>
              <div className="w-6 h-6 relative">
                <Link href="https://facebook.com/"><a><Image src="/facebook.png" layout="fill" objectFit='contain' /></a></Link>
              </div>
          </div>
        <small className="relative top-10 text-white">©️2021 KIKAGAKU</small>
      </div>
    </footer>
  </>
  )
}

export default Home
