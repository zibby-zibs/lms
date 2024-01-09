import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, {params}: {params: {courseId: string; chapterId: string}}){
    try {
        const {userId} = auth()

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401})
        }

        const ownCourse = await db.course.findFirst({
            where: {
                id: params.courseId,
                userId
            }
        
        })

        if(!ownCourse){
            return new NextResponse("Unauthorized", {status: 401})
        }

       

       
        const unPublishedChapter = await db.chapter.update({
            where: {
                id: params.chapterId,
                courseId: params.courseId
            },
            data: {
                isPublished: false
            }
        })

        const publishedChapterInCourse = await db.chapter.findMany({
            where: {
                courseId: params.courseId,
                isPublished: true
            }
        })

        if(!publishedChapterInCourse.length){
            await db.course.update({
                where: {
                    id: params.courseId
                },
                data: {
                    isPublished: false
                }
            })
        }
        return NextResponse.json(unPublishedChapter)
    } catch (error) {
        console.log("[COURSE_UNPUBLISH]", error);
        
        return new NextResponse("Internal Server Error", {status: 500})
    }
}