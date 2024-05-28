import db from "../models";

let getTopDoctorHome = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                limit: limit,
                where: { roleId: 'R2' },
                order: [['createdAt', 'DESC']],
                attributes: { exclude: ['password'] },
                include: [
                    { model: db.Allcode, as: 'positionData', attributes: ['valueVi', 'valueEn'] },
                    { model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi'] }
                ],
                raw: true,
                nest: true
            })

            resolve({
                errCode: 0,
                data: users
            })
        } catch (e) {
            reject(e);
        }
    })
}
let getDoctors = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let doctors = await db.User.findAll({
                where: { roleId: 'R2' },
                attributes: { exclude: ['password', 'image'] },
            })
            reslove({
                errCode: 0,
                data: doctors
            })
        } catch (e) {
            reject(e)
        }
    })
}

let saveInfoDoctor = (input) => {
    return new Promise(async (reslove, reject) => {
        try {
            if (!input.doctorId || !input.contentHTML || !input.contentMarkdown || !input.action) {
                reslove({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                if (input.action === 'CREATE') {
                    await db.Markdown.create({
                        contentMarkdown: input.contentMarkdown,
                        contentHTML: input.contentHTML,
                        description: input.description,
                        doctorId: input.doctorId,
                        // specialtyId: input.specialtyId,
                        // clinicId: input.clinicId
                    })
                } else if (input.action === 'EDIT') {
                    let doctorMarkdown = await db.Markdown.findOne({
                        where: { doctorId: input.doctorId },
                        raw: false
                    })
                    if (doctorMarkdown) {
                        doctorMarkdown.contentMarkdown = input.contentMarkdown;
                        doctorMarkdown.contentHTML = input.contentHTML;
                        doctorMarkdown.description = input.description;

                        await doctorMarkdown.save()
                    }
                }

                reslove({
                    errCode: 0,
                    errMessage: 'Save info doctor succeed!'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getDetailDoctorById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                let data = await db.User.findOne({
                    where: { id: id },
                    attributes: { exclude: ['password'] },
                    include: [
                        {
                            model: db.Markdown,
                            attributes: ['description', 'contentHTML', 'contentMarkdown']
                        },
                        { model: db.Allcode, as: 'positionData', attributes: ['valueVi', 'valueEn'] },

                    ],
                    raw: false,
                    nest: true
                })
                if (data && data.image) {
                    data.image = new Buffer(data.image, 'base64').toString('binary');
                }
                if (!data) data = {};
                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    getTopDoctorHome: getTopDoctorHome,
    getDoctors: getDoctors,
    saveInfoDoctor: saveInfoDoctor,
    getDetailDoctorById: getDetailDoctorById
}