import { test, expect, describe } from 'vitest'
import { join } from 'path'
import dotenv_rs_arse from '../index'

const envPath = join(__dirname, '..', '.env')
const dotTestPath = join(__dirname, 'envs/.test')

describe("test dotenv_rs_arse.dotParse", () => {
  test("test dotenv_rs_arse.dotParse", () => {
    const env = dotenv_rs_arse.dotParse(envPath)
    expect(env).toEqual({
      AAA: '100', TestAA: '200'
    })
  })
  test("test dotenv_rs_arse.dotParse", () => {
    const env = dotenv_rs_arse.dotParse(dotTestPath)
    expect(env).toEqual({
      AAA: '.test',
      TestAA: '.testTest'
    })
  })
})

describe("test dotenv_rs_arse.dotParseBase", () => {
  test("test dotenv_rs_arse.dotParseBase with prefix", () => {
    const env = dotenv_rs_arse.dotParseBase(envPath, 'Test')
  
    expect(env).toEqual({
      TestAA: '200',
    })
  })
  test("test dotenv_rs_arse.dotParseBase with empty prefix", () => {
    const env = dotenv_rs_arse.dotParseBase(envPath, '')
  
    expect(env).toEqual({
      AAA: '100', TestAA: '200'
    })
  })
})



test("test dotenv_rs_arse.getEnv", () => {
  const env = dotenv_rs_arse.getEnv(envPath, 'Test')
}) 
