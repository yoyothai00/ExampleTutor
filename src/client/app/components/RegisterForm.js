import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/register.css";

class RegisterForm extends React.Component {
    render() {
        return (
            <form className="form-horizontal">
                <fieldset>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="selectbasic">คำนำหน้า</label>
                        <div className="col-md-2">
                            <select id="selectbasic" name="selectbasic" className="form-control">
                                <option value="1">ด.ช.</option>
                                <option value="2">ด.ญ.</option>
                                <option value="3">นาย</option>
                                <option value="4">นางสาว</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="textinput">ชื่อ นามสกุล</label>
                        <div className="col-md-2">
                            <input id="textinput" name="textinput" type="text"  className="form-control input-md" required=""/>

                        </div>
                        <div className="col-md-2">
                            <input id="textinput" name="textinput" type="text"  className="form-control input-md" required=""/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="email">เบอร์ติดต่อ*</label>
                        <div className="col-md-4">
                            <input id="email" name="email" type="text"  className="form-control input-md" required=""/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="email">Line ID</label>
                        <div className="col-md-4">
                            <input id="lineid" name="lineid" type="text"  className="form-control input-md" required=""/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="email">สถานศึกษา</label>
                        <div className="col-md-4">
                            <input id="school" name="school" type="text"  className="form-control input-md" required=""/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="selectbasic">ระดับชั้น</label>
                        <div className="col-md-4">
                            <select id="selectbasic" name="selectbasic" className="form-control">
                                <option value="1">ประถม</option>
                                <option value="2">มัธยม</option>
                                <option value="3">มหาลัย</option>
                                <option value="4">ติวสอบ</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" for="selectbasic">หลักสูตร</label>
                        <div className="col-md-4">
                            <div className="checkbox-inline ">
                                <label>
                                    <input type="checkbox" value=""/>หลักสูตรปกติ
                                    </label>
                            </div>
                            <div className="checkbox-inline ">
                                <label>
                                    <input type="checkbox" value=""/>หลักสูตร EP
                                    </label>
                            </div>
                            <div className="checkbox-inline ">
                                <label>
                                    <input type="checkbox" value=""/> หลักสูตร Inter
                                    </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="email">วิชาที่ต้องการเรียน</label>
                        <div className="col-md-4">
                            <input id="subject" name="subject" type="text"  className="form-control input-md" required=""/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="email">วันเวลาที่ต้องการเรียน</label>
                        <div className="col-md-4">
                            <input id="subject" name="subject" type="text"  className="form-control input-md" required=""/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="email">สถานที่เรียน กรุณาระบุให้ละเอียด*</label>
                        <div className="col-md-4">
                             <textarea className ="form-control" rows="3"  required></textarea>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="email">คุณสมบัติติวเตอร์ เช่น เพศ อายุ มหาวิทยาลัย และบุคลิกภาพ</label>
                        <div className="col-md-4">
                             <textarea className ="form-control" rows="3"  required></textarea>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="selectbasic">ผู้ติดต่อ</label>
                        <div className="col-md-4">
                            <div className="checkbox-inline ">
                                <label>
                                    <input type="checkbox" value=""/>นักเรียน
                                    </label>
                            </div>
                            <div className="checkbox-inline ">
                                <label>
                                    <input type="checkbox" value=""/>ผู้ปกครอง
                                    </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" for="selectbasic">รับข่าวสารจาก</label>
                        <div className="col-md-4">
                            <div className="checkbox-inline ">
                                <label>
                                    <input type="checkbox" value=""/>เพื่อน/บุคคลอื่น
                                    </label>
                            </div>
                            <div className="checkbox-inline ">
                                <label>
                                    <input type="checkbox" value=""/>เว็บไซต์
                                    </label>
                            </div>
                            <div className="checkbox-inline ">
                                <label>
                                    <input type="checkbox" value=""/>Google
                                    </label>
                            </div>
                            <div className="checkbox-inline ">
                                <label>
                                    <input type="checkbox" value=""/>Facebook
                                    </label>
                            </div>
                        </div>
                    </div>



                    <div className="form-group">
                        <label className="col-md-4 control-label" for="singlebutton"></label>
                        <div className="col-md-4 register-button">
                            <button id="singlebutton" name="singlebutton" className="btn btn-primary register-button">Register</button>
                        </div>
                    </div>

                </fieldset>
            </form>
        );
    }
}

export default RegisterForm;
