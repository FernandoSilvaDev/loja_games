import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://raw.githubusercontent.com/FernandoSilvaDev/servidor_estatico/refs/heads/main'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => 'db.json',
      transformResponse: (response: { produtos: Game[] }) => response.produtos
    })
  })
})

export const { useGetJogosQuery } = api

export default api
