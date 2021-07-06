import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Newcomp() {
    const validationSchema= Yup.object({

        studname: Yup.string().required("*student name is required"),

        studroll: Yup.number().typeError("enter valid roll number").min(10, "min of 10 digits").max(10, "max of 10 digits"),
    
        science: Yup.number().typeError("*science Mark is required").min(100, "mark out of 100").max(100, "mark cannot exceed 100"),

        maths: Yup.number().typeError("*maths Mark is required").min(100, "mark out of 100").max(100, "mark cannot exceed 100"),

        social: Yup.number().typeError("*social Mark is required").min(100, "mark out of 100").max(100, "mark cannot exceed 100"),

        english: Yup.number().typeError("*englist Mark is required").min(100, "mark out of 100").max(100, "mark cannot exceed 100"),

        lang: Yup.number().typeError("*languagece Mark is required").min(100, "mark out of 100").max(100, "mark cannot exceed 100"),

        langdrop: Yup.string().required("*Select one of the language studied...")

    })
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues:
        {
            studroll: 0,
            studname: ' ',
            science: 0,
            maths: 0,
            social: 0,
            english: 0,
            lang: 0,
            langdrop: ' ',
            studresult: ' ',
            total: 0,
        },
        validationSchema,
        onSubmit(values) {
            console.log("submit");
            
            let math=values.maths;
            let sci=values.science;
            let ss=values.social;
            let eng=values.english;
            let lan=values.lang;

            let total=math+sci+ss+eng+lan;
            
            console.log(total);
            console.log(values);
        }
    })
    return (
        <div className="box1">
            <div>
                <h2 style={{color:"blue"}}>Student Details</h2>
            <form onSubmit={handleSubmit} noValidate>
                <table>
                    <tr>
                        <td><label>Student Roll-No:</label></td>
                        <td> <input type="number" name="studroll" value={values.studroll} onChange={handleChange} /></td>
                        <td style={{ color: "red" }}>{errors.studroll ? errors.studroll : null}</td>
                    </tr><br />

                    <tr>
                        <td><label>Student Name:</label></td>
                        <td> <input type="text" name="studname" value={values.studname} onChange={handleChange} /></td>
                        <td style={{ color: "red" }}>{errors.studname ? errors.studname : null}</td>
                    </tr><br />
                    <tr>
                        <td><label>Maths Mark:</label></td>
                        <td> <input type="number" name="maths" value={values.maths} onChange={handleChange} /></td>
                        <td style={{ color: "red" }}>{errors.maths ? errors.maths : null}</td>
                    </tr><br />
                    <tr>
                        <td><label>Science Mark:</label></td>
                        <td> <input type="number" name="science" value={values.science} onChange={handleChange} /></td>
                        <td style={{ color: "red" }}>{errors.science ? errors.science : null}</td>
                    </tr><br />
                    <tr>
                        <td><label>Social Mark:</label></td>
                        <td> <input type="number" name="social" value={values.social} onChange={handleChange} /></td>
                        <td style={{ color: "red" }}>{errors.social ? errors.social : null}</td>
                    </tr><br />
                    <tr>
                        <td><label>English Mark:</label></td>
                        <td> <input type="number" name="english" value={values.english} onChange={handleChange} /></td>
                        <td style={{ color: "red" }}>{errors.english ? errors.english : null}</td>
                    </tr><br />
                    <tr>
                        <td><label>choose language:</label></td>
                        <td><select className="drop" name="langdrop" onChange={handleChange} value={values.langdrop} >
                            <option value="select">--Select--</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                        </td>
                        <td style={{ color: "red" }}>{errors.langdrop ? errors.langdrop : null}</td>
                    </tr><br />
                    <tr>
                        <td><label>Language Mark:</label></td>
                        <td> <input type="number" name="lang" value={values.lang} onChange={handleChange} /></td>
                        <td style={{ color: "red" }}>{errors.lang ? errors.lang : null}</td>
                    </tr><br />
                    {/* <tr>
                        <td><label>Total Marks:</label></td>
                        <td> <input type="number" name="total" value={values.total} onChange={handleChange} /></td>

                    </tr><br/> */}
                    
                </table>
                <button type="submit" className="btn">click me</button>
            </form>
            </div>
        </div>
    )
}
