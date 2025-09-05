import { z, defineCollection } from 'astro:content'

export default defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        frameworkDocs: z
            .object({
                name: z.string(),
                link: z.string(),
            })
            .optional(),
        reference: z.string().optional(),
        badge: z.enum(['new', 'updated', 'preview', 'deprecated', 'work-in-progress']).optional(),
        childOf: z.string().optional(),
        hasChildren: z.boolean().optional(),
        priorityOrder: z.number().optional(),
        image: z.string().optional(),
    }),
})
