import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/article.css";
import MediaQuery from 'react-responsive'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;
class Article extends React.Component {
    render() {
        return (
            <div>
                <Desktop>
                    <div className='desktop-navbar-offset'></div>
                </Desktop>
                <Mobile>
                    <div className='mobile-navbar-offset'></div>
                </Mobile>
                <Tablet>
                    <div className='desktop-navbar-offset'></div>
                </Tablet>
                <Desktop>
                    <div className="container">
                        <Content />
                    </div>
            </Desktop>
            <Tablet>
                <div className="container mobile-article-padding">
                    <Content />
                </div>
            </Tablet>
            <Mobile>
                <div className="container mobile-article-padding">
                    <Content />
                </div>
            </Mobile>
        </div>


        );
    }
}

class Content extends React.Component{
    render()
    {
        return(
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center">ประถมศึกษา ใครว่าไม่สำคัญ
                        </h2>
                        <hr className = 'colored-line m-purple'/>
                    </div>
                </div>
                <div className="row article-row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 qa">
                        <div className='row'>
                            <div className='col-md-8 col-md-offset-2'>
                                <img src={'src/client/app/assets/images/primaryschoolarticle.jpg'} className='img-responsive article-image'/>
                            </div>
                        </div>
                        <div className = 'row'>
                            <strong className = 'teal'>Q : อยากให้ลูกโตขึ้นมาเป็นเด็กที่เรียนเก่ง ตั้งใจเรียนคุณพ่อคุณแม่ควรเริ่มอย่างไรดีคะ?</strong>
                            <h5>A : คำว่า “เรียนเก่ง” ในที่นี้
                            ไม่ได้หมายถึงการเรียนรู้ด้านวิชาการในห้องเรียนเพียงอย่างเดียวนะคะ
                            แต่หมายถึงการเรียนรู้ในทุกด้าน เช่น การพัฒนาทักษะทางด้านร่างกาย จิตใจ และสังคม
                            เพื่อให้ลูกสามารถอยู่ในสังคมด้วยตัวเองได้อย่างมีความสุขในอนาคต<br></br>
                            &emsp;&emsp;&emsp;&emsp;<strong>เด็กวัยเรียน</strong> คือ เด็กที่มีช่วงอายุ 6-12 ขวบ เป็นวัยที่เริ่มเข้าเรียนประถมศึกษานั่นเอง
                            เด็กวัยนี้มีการเจริญเติบโตและพัฒนาการมากกว่าเด็กวัยอนุบาลอย่างเห็นได้ชัด ดังนั้น
                            <span className = 'teal'>ช่วงวัยนี้ผู้ปกครองควรเริ่มปลูกฝังนิสัยรักการเรียนของน้อง ๆ นะคะ</span> โดยเริ่มจาก
                            <strong>ฝึกสมาธิ เป็นลำดับแรก</strong><br></br>
                            <div className = 'indent-paragraph paragraph'>
                                “ไม่ค่อยมีสมาธิทำการบ้านเลย ถึงเวลาทำการบ้านเปิดหนังสือ ตาก็ดู มือก็ถือดินสอ
                                แต่ใจไม่อ่านไม่ทำ คิดเรื่องอื่นไปเสียแล้ว”<br></br>
                                “เวลาอ่านหนังสือนั่งนิ่งๆ อยู่กับที่ไม่ได้”<br></br>
                                “คุณครูบอกว่า อยู่โรงเรียนเล่นตลอดเวลา ไม่ตั้งใจเรียนเอาเลย”<br></br>
                                “กังวลว่าถ้าลูกยังไม่มีสมาธิในการเรียนอย่างนี้ ลูกจะเรียนดีได้อย่างไร แล้วเขาจะเรียนทันเพื่อนไหม
                                ไปจนถึงสงสัยว่าลูกจะเป็นสมาธิสั้น”<br></br>
                            </div>
                            สิ่งสำคัญที่สุดที่ลูกๆจะเริ่มรักการเรียนหรือการอ่าน หรือแม้กระทั่งทำสิ่งอื่น ๆได้อย่างสำเร็จ
                            คือ ลูกต้องมีสมาธิ</h5>
                        </div>
                        <br></br><br></br>
                    <div className = 'row'>
                            <strong className = 'teal'>
                                Q : แล้วพ่อแม่จะทำอย่างไรได้บ้าง เพื่อช่วยให้ลูกมีสมาธิในการเรียนและเรียนเก่งขึ้น ?
                            </strong>
                            <h5>
                                ผู้ปกครองสามารถฝึกสมาธิในการเรียนของลูกๆ ตามคำแนะนำ 5 ข้อนี้
                            เพื่อให้ลูกน้อยมีสมาธิในการเรียนมากขึ้นได้ค่ะ <br></br><br></br>
                            <strong>ทำตารางเวลาคนเก่ง!</strong> ความสำคัญอยู่ที่คุณกับลูกทำตารางเวลานี้ด้วยกัน
                            เพื่อกำหนดกิจวัตรประจำวันตั้งแต่ตื่นนอนจนถึงเข้านอน เช่น เวลาเรียน เวลาเล่น เวลานอน
                            เมื่อได้ลงมือทำตารางเอง น้อง ๆ ก็มักจะจำได้ดีและเป็นสิ่งเตือนสติทำให้เกิดสมาธิตามมา<br></br><br></br>
                            <strong>จัดมุมเรียนโดยเฉพาะ</strong> ผู้ปกครอง ควรสนับสนุนให้ลูกมี<span className = 'teal'>โต๊ะเรียน</span>เป็นของตนเอง ดีที่สุด คือ
                            โต๊ะควรตั้งอยู่ในบริเวณที่เงียบ ไม่ควรมีเสียงอึกทึก ไม่มีทีวี เกม
                            หรือสิ่งที่ชวนให้เสียสมาธิอยู่ใกล้ๆ เพราะเด็กไวต่อสิ่งเร้ามาก รวมทั้งเวลาการเรียน น้อง
                            ๆต้องมีเวลาในการทบทวนบทเรียน ทำการบ้าน
                            ด้วยตนเองหรือมีครูช่วยสอนและดูแลแบบส่วนตัว<br></br><br></br>
                            <strong>ทำกิจกรรมที่ชอบ</strong> คุณพ่อคุณแม่ลองสังเกตนะคะว่าลูกๆ <span className = 'teal'>ทำกิจกรรมอะไรแล้วสนุก
                            ทำได้ต่อเนื่องค่อนข้างนาน</span> ชวนลูกทำเล่นด้วยกันในครอบครัว เช่น
                            เด็กบางคนสามารถถักไหมพรม เล่นเกมกระดาน อ่านนิทาน เป็นต้น
                            สิ่งเหล่านี้สามารถสร้างสมาธิของลูกได้อย่างไม่น่าเชื่อ<br></br><br></br>
                            <strong>ดนตรีสร้างสมาธิ</strong>  <span className = 'teal'>ดนตรีช่วยทำให้จิตใจมีความสงบ</span> ลดความสับสนวุ่นวาย
                            เมื่อจิตใจสงบทำให้เกิดคลื่นสมองที่เรียกว่า คลื่นอัลฟา (Alpha Wave)
                            ซึ่งเป็นภาวะที่มีสมาธิและเหมาะสมในการเรียนรู้ สร้างสรรค์ผลงาน
                            และมีใจจดใจจ่อกับเรื่องใดเรื่องหนึ่ง<br></br><br></br><br></br>
                            <strong>ศิลปะสนุก</strong> กิจกรรมทางศิลปะช่วยทำให้เกิดสมาธิ
                            และได้ทักษะการทำงานประสานกันระหว่างมือและสายตาด้วย เช่น การวาดภาพ โดยใช้สีไม้
                            สีน้ำ สีเทียน หรือ การปั้น ด้วยดินเหนียว แป้งโด หรือดินน้ำมัน หรือการพับกระดาษ
                            เพื่อให้ลูกได้ใช้ศิลปะในการฝึกสมาธิ </h5>
                            <div className = 'citation'>ขอบคุณข้อมูลบางส่วน จาก https://women.mthai.com/momandchildren/mom-child/155659.html</div>
                        </div>
                        <br></br><br></br>
                        <div className = 'row'>
                            <strong className = 'teal'>Q : มีวิธี หรือ เทคนิค อะไรมั้ย ที่จะทำให้ลูกเรียนเก่ง ฉลาดและเป็นคนดี ?</strong>
                            <h5>
                                A : มีค่ะ ต่อไปนี้ จะเป็นเคล็ดลับทำให้ลูกเรียนเก่ง I.Q. สูง รวมทั้ง E.Q. ดีด้วย<br></br>
                                <strong>ให้ความรัก</strong> เป็น<span className = 'teal'>ข้อแรกที่สำคัญมาก</span>
                                คุณพ่อคุณแม่ต้องแสดงออกอย่างเหมาะสมให้ลูกๆได้รับรู้ บางคนรักลูกแต่ไม่กล้าพูด
                                ไม่กล้าแสดง การยิ้มให้ การสัมผัส การกอด โอบไหล่
                                ล้วนแล้วแต่เป็นการแสดงออกถึงความรักของพ่อแม่ต่อลูกได้เป็นอย่างดี
                                ซึ่งจะเป็นจุดเริ่มต้นสู่การมีครอบครัวที่มีความสุขและอบอุ่น <br></br>
                                <strong >ทัศนคติ </strong> การที่<span className = 'teal'>คุณพ่อคุณแม่มีความสัมพันธ์ที่ดีต่อกัน</span> รวมถึงมีทัศนคติ
                                ความคิดเห็นในการเลี้ยงดู อบรมสั่งสอนลูกไปในทิศทางเดียวกัน
                                ไม่ขัดแย้งกันจะทำให้ลูกมีความสุข มี E.Q.ที่ดีได้<br></br>
                                <strong>รู้และเข้าใจพัฒนาการของลูก</strong> พัฒนาการของเด็กไม่มีหยุด เริ่มตั้งแต่ตั้งครรภ์
                                โดยเฉพาะ<span className = 'teal'>ช่วงวัยประถมเป็นช่วงที่เปิดรับการเรียนรู้มากที่สุด</span> ดังนั้น
                                ช่วงนี้ผู้ปกครองควรสนับสนุนทางด้านการเรียน การทำกิจกรรมเสริมของลูกอย่างเต็มที่
                                เพื่อสร้างทักษะพื้นฐานที่ดีก่อนเข้าสู่วัยรุ่น<br></br>
                                <strong>สภาพแวดล้อม</strong> สิ่งแวดล้อมเป็นปัจจัยสำคัญที่ทำมีผลต่อพฤติกรรมของลูก
                                <strong>“หากเราอยู่ในสังคมแบบไหน เราจะเป็นคนแบบนั้น” </strong> เรื่องนี้ คุณพ่อคุณแม่คงจะปฏิเสธไม่ได้
                                บางทีลูกจะมีการกระทำแปลกๆที่เราไม่ได้สอน
                                หรืออยากซื้อของเล่นบางชิ้นที่ลูกไม่เคยอยากได้มาก่อน
                                ทั้งหมดก็เป็นเพราะลูกได้มาจากสภาพแวดล้อมที่พบเจอ เช่น เพื่อนๆที่โรงเรียน เขามี
                                เขาทำกันแบบนี้ ดังนั้น สิ่งที่ผู้ปกครองสามารถช่วยลูกให้เป็นเด็กเก่ง เด็กดี ได้ คือ
                                <span className = 'teal'>เลือกโรงเรียนที่ดีที่สุดให้แก่ลูก</span>
                            </h5>
                            <div className = 'citation'>ขอบคุณข้อมูลบางส่วนจาก http://www.manager.co.th/Family/ViewNews.aspx?NewsID=9520000154025</div>
                        </div>
                        <br></br><br></br>
                        <div className = 'row'>
                            <strong className = 'teal'>Q : การจัดอันดับโรงเรียนยอดนิยม มีชื่อเสียง เก่ง และได้รับการยอมรับในระดับชั้นประถมศึกษามีโรงเรียนไหนบ้าง ?</strong>
                            <h5>A : 1.โรงเรียนสาธิตจุฬาลงกรณ์มหาวิทยาลัย (ฝ่ายประถม)<br></br>2. โรงเรียนอัสสัมชัญ
                            แผนกประถม  <br></br>3. โรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒประสานมิตร
                            (ฝ่ายประถม)<br></br>4. โรงเรียนสาธิตแห่งมหาวิทยาลัยเกษตรศาสตร์ <br></br> 5.
                            โรงเรียนกรุงเทพคริสเตียนวิทยาลัย<br></br>6. โรงเรียนราชวินิต <br></br>7. โรงเรียนเซนต์คาเบรียล <br></br>
                            8. โรงเรียนมาแตร์เดอีวิทยาลัย <br></br> 9. โรงเรียนวัฒนาวิทยาลัย <br></br>10. โรงเรียนสาธิตละอออุทิศ
                            มหาวิทยาลัยราชภัฏสวนดุสิต <br></br>11. โรงเรียนอนุบาลสุธีธร นครปฐม<br></br>12. โรงเรียนเซนต์ดอมินิก<br></br>
                            13. โรงเรียนสาธิตประถม (ศึกษาศาสตร์) ม.ขอนแก่น<br></br>14. โรงเรียนสาธิต(พิบูลบำเพ็ญ)
                            ม.บูรพา  <br></br>15. โรงเรียนอนุบาลนครราชสีมา นครราชสีมา <br></br>
                            16. โรงเรียนเซนต์ฟรังซีสซาเวียร์คอนแวนต์  <br></br>17. โรงเรียนเซนต์โยเชฟคอนเวนต์ <br></br>
                            18. โรงเรียนอรรถมิตร <br></br> 19. โรงเรียนปรินส์รอแยลส์วิทยาลัย เชียงใหม่ <br></br>
                            20. โรงเรียนสารสาสน์เอกตรา <br></br>
                            *แต่ถ้าน้อง ๆ ไม่ได้อยู่ในโรงเรียนดังต่อไปนี้ คุณพ่อคุณแม่ไม่ต้องกังวลนะคะ
                            โรงเรียนเป็นแค่ส่วนหนึ่งไม่สำคัญเท่ากับการตั้งใจเรียนด้วยใจของน้องๆ <span className = 'teal'>ทาง CULH ยินดีช่วยน้อง
                            ๆอย่างเต็มที่ ด้วยการจัดส่งติวเตอร์คุณภาพไปดูแลการเรียนของน้อง ๆ ถึงที่บ้านค่ะ</span></h5>
                        </div>
                        <br></br><br></br>
                        <div className = 'row'>
                            <strong className = 'teal'>Q: แล้วควรเลือกโรงเรียนไหนให้ลูกเรียนดี ในระดับชั้นประถมศึกษา ?</strong>
                            <h5>A : โรงเรียนประถมศึกษา ในปัจจุบัน มีหลายหลักสูตรค่ะ ได้แก่
                            1.โรงเรียนประถมหลักสูตรสองภาษา 2.โรงเรียนสาธิต 3.โรงเรียนประถมหลักสูตรสามัญ
                            4.โรงเรียนประถมหลักสูตรทางเลือก
                            ผู้ปกครอง สามารถเลือกโรงเรียนตามหลักสูตรที่เหมาะสมกับลูกๆ ,
                            โรงเรียนที่มีระยะการเดินทางไม่ไกลจากที่บ้านมากเกินไป หรือ มีสภาพแวดล้อมที่ดีค่ะ</h5>
                        </div>
                        <br></br><br></br>
                        <div className = 'row'>
                            <strong className = 'teal'>Q : ทำไมน้อง ๆ ระดับชั้นประถมศึกษา ถึงต้องเรียนพิเศษส่วนตัวกับทาง CU LEARNING HOME ?</strong>
                            <h5>A : ทาง CULH ใส่ใจและเข้าใจน้อง ๆนักเรียนในทุกช่วงวัยได้เป็นอย่างดี โดยเฉพาะน้อง
                            ๆประถมศึกษา ทางเรายินดีช่วยคุณพ่อคุณแม่ในการดูแลการเรียนของน้อง ๆแบบส่วนตัว
                            ด้วยการจัดส่งติวเตอร์เชี่ยวชาญเฉพาะด้าน มีคุณภาพ และที่สำคัญ
                            มีใจรักและเต็มที่ในการสอน หัวใจในการเรียนพิเศษส่วนตัวในระดับชั้นนี้คือ
                            <span className = 'teal'>เน้นเทคนิคความเข้าใจพื้นฐานของ</span>วิชาทั้งหมด <span className = 'teal'>ดูแลการบ้าน</span>อย่างใกล้ชิด
                            เรียนรู้การ<span className = 'teal'>ทำแบบฝึกหัด</span> จนไปถึง<span className = 'teal'>เทคนิคในการทำข้อสอบ</span> เพื่อเพิ่มเกรดในห้อง
                            และสนามสอบแข่งขันเข้าเรียนต่อในระดับชั้นมัธยมศึกษาต่อไป<br></br>
                            <span className = 'red'>“เราเชื่อว่า น้อง ๆ จะเก่งได้ ต้องอยู่ที่ความตั้งใจของตัวเองและความพยายาม
                            ตั้งใจสอนของคุณครู จะนำไปสู่ความสำเร็จ ”</span></h5>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-md-4 col-md-offset-4 m-yellow text-center whyus link-padding'>
                                <a href = '/#whyus'>ทำไมต้องเรา</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;
