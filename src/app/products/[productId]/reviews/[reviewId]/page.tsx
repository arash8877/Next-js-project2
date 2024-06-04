import { iParams } from "@/type/page"

export default function ProductReviews({params}: iParams) {
    return <h1>Product {params.productId} - Review {params.reviewId}</h1>
} 