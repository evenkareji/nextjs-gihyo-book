import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import AppLogo from 'components/atoms/AppLogo'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'
import SigninFormContainer from 'containers/SigninFormContainer'

const Signinpage: NextPage = () => {
  const router = useRouter()
  //   認証後のイベントハンドラ
  const handleSignin = async (err?: Error) => {
    if (!err) {
      //   サインインに成功しクエリが指定されている場合はそのURLに移動
      //   デフォルトはトップページに移動
      const redurectTo = (router.query['redirect_to'] as string) ?? '/'
      console.log('Redirecting', redurectTo)
      await router.push(redurectTo)
    }
  }
}
