import React, { Suspense } from 'react'
import s from './content.module.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Preloader } from '../common_components/preloader'
import ProfileSettingsContainer from '../profile/profile-settings'
import ErrorPage from '../common_components/error-page'
const MessagesContainer = React.lazy(() => import('../messages/messages-container'))
const ProfileContainer = React.lazy(() => import('../profile/profile-container'))
const SubsContainer = React.lazy(() => import('../subs/subs-container'))
const LoginConatainer = React.lazy(() => import('../login/login-container'))
const PostEditorContainer = React.lazy(() => import('../editor/editor'))
const NewsfeedContainer = React.lazy(() => import('../newsfeed/newsfeed'))
const PopularContainer = React.lazy(() => import('../popular/popular/popular'))
const PostPageContainer = React.lazy(() => import('../posts/post-page'))

const Content = (props: ownPPProps) => {
    return (
        <section className={s.content}>
            <div className='container'>
                <div className='content__inner'>
                    <Suspense fallback={<Preloader />}>
                        <Routes>
                            <Route path='/ShitPoster' element={<Navigate to='/newsfeed' />} />
                            <Route path='/profile/:id?' element={<ProfileContainer />} />
                            <Route path='/popular' element={<PopularContainer />} />
                            <Route path='/newsfeed' element={<NewsfeedContainer />} />
                            <Route path='/messages' element={<MessagesContainer />} />
                            <Route path='/subs/:page?' element={<SubsContainer />} />
                            <Route path='/login' element={<LoginConatainer />} />
                            <Route path='/post/:id' element={<PostPageContainer news={props.news} />} />
                            <Route path='/posteditor' element={<PostEditorContainer />} />
                            <Route path='/settings' element={<ProfileSettingsContainer />} />
                            <Route path='*' element={<ErrorPage />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </section>)
}
export default Content;