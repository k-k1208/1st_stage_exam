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
            <div className="flex sp:block">
              <div className="h-20 w-1/4 relative  ml-[60px] sp:w-[30%] sp:mx-[35%] sp:justify-between">
                <Link href="/#FV"><a><Image src="/logo.png" quality={100}  layout="fill" objectFit='contain' alt="fwywdロゴ" className='object-left'/></a></Link>
              </div>
              <ul className="ml-auto  w-auto flex justify-between  items-center space-x-4 mr-[80px] sp:w-[90%] sp:mx-[5%] sp:justify-around sp:mb-0">
                  <li className="text-lg hover:underline"><Link href="/#ABOUT"><a className='text-[#008c8d]'>ABOUT</a></Link></li>
                  <li className="text-lg hover:underline"><Link href="/#SKILLS"><a className='text-[#008c8d]'>SKILLS</a></Link></li>
                  <li className="text-lg hover:underline"><Link href="/#VALUES"><a className='text-[#008c8d]'>VALUES</a></Link></li>
                  <li className="text-lg hover:underline"><Link href="/#FUTURE"><a className='text-[#008c8d]'>FUTURE</a></Link></li>
              </ul>
            </div>
          </nav>
      </header>
    
    <section id='FV' className="pt-20 w-full h-[570px] relative mb-10 bg-[#6bc2c3] sp:z-10">
        <div className="flex w-full h-full sp:block">
          <div className="w-1/3 absolute top-2/4 sp:w-full sp:top-0 sp:pt-40">
              <h1 className="text-4xl pl-20 text-left tracking-widest text-white font-bold sp:w-full sp:text-center sp:pl-0">メインタイトル</h1>
              <h2 className="text-2xl pl-20 mt-4 text-left tracking-widest text-white/75 font-bold sp:w-full sp:text-center sp:pl-0">サブタイトル</h2>
          </div>
          <div className="ml-auto w-2/5 mt-6 mb-6 relative h-5/6 mr-10 sp:w-[70%] sp:h-[45%]  sp:mx-[15%] sp:absolute sp:bottom-0 sp:px-10 sp:justify-center">
            <Image src="/hero.png" quality={100} layout="fill" objectFit='contain' alt="heroイメージ"/> 
          </div>  
        </div>   
    </section>

    <div id="AboutValuesFutureZindex" className="relative z-0">
      <section id="ABOUT" className="pt-20 -mt-20 pb-10 bg-[url('/bg-about.png')] bg-no-repeat bg-[length:100%_100%] w-full max-h-fit sp:max-h-fit sp:bg-white sp:bg-none sp:pt-[108px] sp:-mt-[108px]">
        <h2 className="text-2xl text-center font-bold text-[#384359] mb-20 sp:mb-[10%]">私について <span className="text-lg text-[#008c8d] font-normal sp:block">ABOUT</span></h2>

        <div className="flex justify-center  space-x-14 mb-20 relative z-40 sp:block sp:space-x-[15%]">
            <div id="hobby" className="w-1/5 sp:w-[70%] sp:mx-[15%] sp:mb-[15%] bg-white rounded-xl">
                <div className="flex justify-center relative w-auto h-[170px] mb-4">
                    <Image src="/about-1.png" quality={100} layout="fill" objectFit='contain'/>
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
            
            
            <div id="favoriteFood" className="w-1/5 sp:w-[70%] sp:mb-[15%] bg-white rounded-xl">
                <div className="flex justify-center relative w-auto h-[170px] mb-4 ">
                    <Image src="/about-2.png" quality={100} layout="fill" objectFit='contain' />
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
            
            <div id="personality" className="w-1/5 sp:w-[70%] bg-white rounded-xl">
                <div className="flex justify-center relative w-auto h-[170px] mb-4">
                    <Image src="/about-3.png" quality={100} layout="fill" objectFit='contain' />
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


      <section id="SKILLS" className="w-full max-h-fit pt-20 -mt-40 mb-10 pb-28 bg-transparent bg-[url('/bg-skills.png')] bg-no-repeat bg-[length:100%_100%] z-30 sp:bg-[url('/bg-skills-sp.png')] sp:w-full sp:h-auto sp:max-h-fit sp:pt-[108px] sp:-mt-[108px]">
          <div className="inline-flex">
            <div className="flex w-full h-full sp:flex-col">
                <div id="skill_image" className="w-2/4 relative ml-20 -mt-10 sp:hidden">
                  <Image src="/skill.png" quality={100} layout="fill" objectFit='contain'/>
                </div>
                <div className="ml-10 w-2/4 mr-20 sp:w-full sp:mx-0 sp:h-full">
                    <h2 className="text-2xl w-auto font-bold text-[#384359] mb-4 sp:text-center order-1 ">スキル <span className="text-lg text-[#008c8d] font-normal sp:block">SKILLS</span></h2>
                    <div id="skill_image" className="hidden relative sp:w-[70%] sp:mx-[15%] sp:h-[30vh] sp:block sp:mb-[10%]">
                      <Image src="/skill.png" quality={100} layout="fill" objectFit='contain'/>
                    </div>
                    <p className="w-full text-[#384359] sp:w-[90%] sp:mx-[5%] sp:mb-[10%]">
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
                    <div className='bg-white rounded-lg mt-4 sp:mx-[5%]'>
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
          </div>
          
      </section>
    

      <section id="VALUES" className="w-full max-h-fit pt-20 -mt-20 pb-10 sp:h-auto sp:max-h-fit sp:pt-[108px] sp:-mt-[108px]">
          <h2 className="text-2xl text-center font-bold text-[#384359] mb-20">価値観 <span className="text-lg text-[#008c8d] font-normal sp:block">VALUES</span></h2>
          <div className="inline-flex">
            <div className="flex justify-center h-full sp:flex-col">
                <div className="space-x-8 inline-flex w-4/6 h-auto justify-center items-center  bg-white rounded-lg relative z-20 sp:block sp:space-x-[15%] sp:space-y-[15%] sp:w-full sp:bg-transparent">
                    <article className="w-1/4 sp:w-[70%] sp:mx-[15%]">
                        <div className="flex justify-center h-[200px] relative mb-8">
                            <Image src="/value1.png" layout="fill" objectFit='contain' className="w-1/2"/>
                        </div>
                        
                        <h3 className="text-[#384359] text-center mb-4 text-lg font-semibold">価値観01</h3>
                        <p className="text-[#384359]">
                            テキストテキストテキストテキスト
                            テキストテキストテキストテキスト
                            テキストテキストテキストテキスト
                            テキストテキストテキストテキスト
                            テキストテキストテキストテキスト
                        </p>
                    </article>
                    <div className='h-5/6 border-r-2 border-[#c5eaea] border-solid sp:hidden'></div>
                    <article className="w-1/4 sp:w-[70%]">
                        <div className="flex justify-center h-[200px] relative mb-8">
                            <Image src="/value2.png" layout="fill" objectFit='contain' className="w-1/2"/>
                        </div>
                        <h3 className="text-[#384359] text-center mb-4 text-lg font-semibold">価値観02</h3>
                        <p className="text-[#384359]">
                            テキストテキストテキストテキスト
                            テキストテキストテキストテキスト
                            テキストテキストテキストテキスト
                            テキストテキストテキストテキスト
                            テキストテキストテキストテキスト
                        </p>
                    </article>
                    <div className='h-5/6 border-r-2 border-[#c5eaea] border-solid sp:hidden'></div>
                    <article className="w-1/4 sp:w-[70%] sp:bg-white sp:rounded-3xl">
                        <div className="flex justify-center h-[200px] relative mb-8">
                            <Image src="/value3.png" layout="fill" objectFit='contain' className="w-1/2"/>
                        </div>
                        <h3 className="text-[#384359] text-center text-lg mb-4 font-semibold">価値観03</h3>
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
          </div>
                 
      </section>

      <section className="z-10 max-h-fit w-full  relative flex space-x-8 justify-center items-center pt-40 -mt-32 bg-[url('/bg-future.png')] bg-[length:100%_100%] pb-10 sp:w-full sp:h-auto sp:max-h-fit sp:bg-[url('/bg-future-sp.png')] sp:bg-no-repeat sp:bg-[length:100%_100%] sp:inline-block sp:space-x-0 sp:pb-0">
          <div className="w-1/3 relative sp:w-full">
              <h2 id="FUTURE" className=" pt-20 -mt-20 mb-4 text-2xl font-bold text-[#384359] sp:w-full sp:text-center sp:pt-[108px] sp:-mt-[108px]">3年後にやりたいこと <span className="text-lg text-[#008c8d] font-normal sp:block">FUTURE</span></h2>
              <p className="text-[#384359] sp:mx-[5%]">
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
          <div className="relative h-[275px] w-[500px] ml-20 mt-[110px] sp:mx-0 sp:w-full sp:h-auto sp:aspect-[480/251] sp:mt-[5%] sp:mb-0">
            <Image src="/future.png" quality={100} layout="fill" objectFit='contain'/>
          </div>
      </section>
    </div>

    <footer className="text-center bg-[#262c3a] h-[405px]">
      <div className="pt-10">
        <small className="text-white">CREATED BY  <span className="text-lg font-semibold">名前 太郎</span></small>
          <div className="flex mt-10 mb-10 relative h-[120px]">
              <Link href='/#FV'><a><Image src="/logo_white.png" layout="fill" objectFit='contain'/></a></Link>
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
