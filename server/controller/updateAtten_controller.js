
const csv = require('csv-parser')
const fs = require('fs')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const attenUpdate = (req, res) => {
    const data = req.body;
    console.log('hiii');
    console.log(data)
    updateAttendance('2023-03-25', data);

    res.json({ status: 400 })
}
const updateAttendance = async (date, attendance) => {
    const results = [];

    fs.createReadStream('attendance.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // Find the row corresponding to the specific date
            const rowToUpdate = results.find((row) => row.date === date);

            // Update the value of the column
            rowToUpdate.attendance = attendance;

            // Write the modified data back to the CSV file
            const csvWriter = createCsvWriter({
                path: 'attendance.csv',
                header: [{ id: 'date', title: 'Date' }, { id: 'attendance', title: 'Attendance' }]
            });
            csvWriter.writeRecords(results);
        });
};

module.exports = { attenUpdate }