import React from 'react';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
const CardViewer = () => {
    return(
        <>
        <ApprovalCard><CommentDetail author="John" comment="Nice Job"/></ApprovalCard>
        <ApprovalCard><CommentDetail author="Srinu" comment="Awesome!"/></ApprovalCard>
        <ApprovalCard><CommentDetail author="Hari" comment="Nice Nice!" /></ApprovalCard>
        <ApprovalCard><CommentDetail author="Sam" comment="Cool !" /></ApprovalCard>
        <ApprovalCard><CommentDetail author="Alex" comment="Awesome!"/></ApprovalCard>
        <ApprovalCard><CommentDetail author="Jane" comment="Nice Nice!" /></ApprovalCard>
        <ApprovalCard><CommentDetail author="Bob" comment="Cool !" /></ApprovalCard>
        </>
        
    )
}
export default CardViewer;