
export const options = {
    method: 'GET',
}

const api_key = 'AIzaSyDi9pz4aF5uTdDSg7UI-4WzLE0L2qQJEh8'
const base_url = 'https://sheets.googleapis.com/v4/spreadsheets'
const foundraisers_sheet = 'Fundraisers'
const effected_area_sheet = 'Test'
const foundraisers_sheet_id = '1iTUqbhr2hUUIWgCBhdtXX26uE1b0N8N-dSbzcvG3Ir4'


export const fundraisers_sheet_link = `${base_url}/${foundraisers_sheet_id}/values/${foundraisers_sheet}!A1:L135?valueRenderOption=FORMATTED_VALUE&key=${api_key}`
export const effected_area_sheet_link = `${base_url}/${foundraisers_sheet_id}/values/${effected_area_sheet}!A1:L135?valueRenderOption=FORMATTED_VALUE&key=${api_key}`
