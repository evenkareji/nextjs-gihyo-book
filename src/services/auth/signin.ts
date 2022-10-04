//typesは後ほど定義
import { ApiContext, User } from "types";
import { fetcher } from "utils";

export type SigninParams = {
  /**
   * ユーザー名
   * サンプルユーザー名の名前は "user"
   */
  username: string;
  /**
   * パスワード
   * サンプルユーザーのパスワードは "password"
   */
  password: string;
};

/**
 * 認証API(サインイン)
 *  @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signin = async (
  context: ApiContext,
  params: SigninParams
): Promise<User> => {
  return await fetcher(`${context.apiRootUrl.replace(/\$/g, "")}/auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify(params),
  });
};

export default signin;