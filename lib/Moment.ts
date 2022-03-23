import moment from 'moment-timezone'


class Moment {
    static format(timestamp) {
        return moment(timestamp).tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss')
    }
}

export default Moment