import { INewUser } from '@/types'
import { ID, Query } from 'appwrite'
import { account, avatars } from './config'

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    )
    if (!newAccount) throw Error

    const avatarUrl = avatars.getInitials(user.name)


    return newAccount
  } catch (error) {
    console.log(error)
    return error
  }
}


export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;
}) {
  
}