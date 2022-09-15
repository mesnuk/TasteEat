import React from "react";
import { TitleSide } from "./titile-block-blog";
import { BlogSide } from "./blog";
import {BlogCardProps} from "./type";


export const SectionBlog: React.FC<{blogCards : BlogCardProps[]}> = ({blogCards}) =>{
    return (
        <section className='section-blog'>
            <TitleSide />
            <BlogSide  blogCards={blogCards}/>
        </section>
    )
}