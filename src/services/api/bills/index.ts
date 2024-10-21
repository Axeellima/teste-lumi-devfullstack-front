import apiDefault from ".."

const getAllUnitConsumer = async ({
  year,
  clientNumber,
}: {
  year?: number
  clientNumber?: number
}) => {
  let clientSearch = clientNumber ? `&clientNumber=${clientNumber}` : ""

  try {
    let res = await apiDefault.get(
      `consumer?year=${year ? year : 2024}${clientSearch}`
    )
    return res.data
  } catch (e) {
    console.error(e)
    return []
  }
}

const getFinancialResults = async () => {
  try {
    let res = await apiDefault.get(`bills/financial`)
    return res.data
  } catch (e) {
    console.error(e)
    return []
  }
}
const getDownloadBill = async ({ id }: { id: string }) => {
  try {
    let res = await apiDefault.get(`bills/download/${id}`)
    return res
  } catch (e) {
    console.error(e)
    return []
  }
}

export { getAllUnitConsumer, getDownloadBill, getFinancialResults }
