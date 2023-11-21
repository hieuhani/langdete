import { Hono } from 'https://deno.land/x/hono@v3.10.1/mod.ts'
import { franc } from 'https://esm.sh/franc-min@6'

const app = new Hono()

app.get('/', (c) => {
    const { text } = c.req.query()  
    return c.json({
        code: franc(text || '', {
            minLength: 2,
            only: ['vie', 'eng', 'jpn', 'rus', 'kor', 'tha', 'cmn', 'hin']
        }),
        standard: 'ISO 639-3',
    })
})

Deno.serve(app.fetch)
