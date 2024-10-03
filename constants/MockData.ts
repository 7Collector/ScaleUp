import { PostProps } from "@/components/Post";

export const announcements: string[] = [
    "https://example.com/announcement1.png",
    "https://example.com/announcement2.png",
    "https://example.com/announcement3.png",
];

export const posts: PostProps[] = [
    {
        avatarUrl: "https://example.com/avatar1.png",
        username: "user_one",
        menuIconUrl: "https://example.com/menu_icon.png",
        postImageUrl: "https://example.com/post_image1.png",
        likeIconUrl: "https://example.com/like_icon.png",
        commentIconUrl: "https://example.com/comment_icon.png",
        shareIconUrl: "https://example.com/share_icon.png",
        bookmarkIconUrl: "https://example.com/bookmark_icon.png",
        tags: ["#tag1", "#tag2", "#tag3"],
        caption: "This is the first post caption!",
    },
    {
        avatarUrl: "https://example.com/avatar2.png",
        username: "user_two",
        menuIconUrl: "https://example.com/menu_icon.png",
        postImageUrl: "https://example.com/post_image2.png",
        likeIconUrl: "https://example.com/like_icon.png",
        commentIconUrl: "https://example.com/comment_icon.png",
        shareIconUrl: "https://example.com/share_icon.png",
        bookmarkIconUrl: "https://example.com/bookmark_icon.png",
        tags: ["#tagA", "#tagB"],
        caption: "Check out this amazing post!",
    },
    {
        avatarUrl: "https://example.com/avatar3.png",
        username: "user_three",
        menuIconUrl: "https://example.com/menu_icon.png",
        postImageUrl: "https://example.com/post_image3.png",
        likeIconUrl: "https://example.com/like_icon.png",
        commentIconUrl: "https://example.com/comment_icon.png",
        shareIconUrl: "https://example.com/share_icon.png",
        bookmarkIconUrl: "https://example.com/bookmark_icon.png",
        tags: ["#tagX", "#tagY", "#tagZ"],
        caption: "Another beautiful day!",
    },
];
