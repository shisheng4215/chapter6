import moment from 'moment'

export function date(value){
	return moment(value).format('YYYY-MM-DD')
}