import React from "react";
import styled from "styled-components";
import samProfile from "./DevPictures/LinkedProfile.jpg";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { colorsSet } from "../../Global/Colors";

export const AboutUs = () => {
  return (
    <Wrapper>
      <Title>About the dev team</Title>
      <Description>Brad's Cheesy Text</Description>
      <ConcordiaLinkContainer>
        <ConcordiaLink
          href="https://concordiabootcamps.ca/?utm_term=concordia%20bootcamps&utm_campaign=Bloom%20-%20Brand%20-%20Concordia%20Bootcamps%20-%20EN&utm_source=adwords&utm_medium=ppc&hsa_acc=3838886679&hsa_cam=11302039329&hsa_grp=109744304846&hsa_ad=471481223441&hsa_src=g&hsa_tgt=kwd-974538943424&hsa_kw=concordia%20bootcamps&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAiA2O39BRBjEiwApB2Ikn4rABDF_gjtLM2O1RfUjULRLwfLLejIWJUxp2LO3KovchxEFBUBjxoCkY0QAvD_BwE"
          target="_blank"
        >
          Concordia Bootcamp WebPage
        </ConcordiaLink>
      </ConcordiaLinkContainer>
      <TeamMemberContainer>
        <LeftColumn>
          <Member>
            <MemberImg src={samProfile} />
            <MemberInfos>
              <Name>Samuel St-Pierre Lariviere</Name>
              <Linkedin>
                <Logo>
                  <AiOutlineLinkedin />
                </Logo>
                <ProfilePagesLinks
                  href="https://www.linkedin.com/in/samuel-st-pierre-larivi%C3%A8re/"
                  target="_blank"
                >
                  www.linkedin.com/in/samuel-st-pierre-larivière
                </ProfilePagesLinks>
              </Linkedin>
              <GitHub>
                <Logo>
                  <AiOutlineGithub />
                </Logo>
                <ProfilePagesLinks
                  href="https://github.com/SamuelSTPL"
                  target="_blank"
                >
                  https://github.com/SamuelSTPL
                </ProfilePagesLinks>
              </GitHub>
            </MemberInfos>
          </Member>
          <Member>
            <MemberImg src={samProfile} />
            <MemberInfos>
              <Name>Franky</Name>
              <Linkedin>
                <Logo>
                  <AiOutlineLinkedin />
                </Logo>
                <ProfilePagesLinks href="" target="_blank"></ProfilePagesLinks>
              </Linkedin>
              <GitHub>
                <Logo>
                  <AiOutlineGithub />
                </Logo>
                <ProfilePagesLinks href="" target="_blank"></ProfilePagesLinks>
              </GitHub>
            </MemberInfos>
          </Member>
        </LeftColumn>
        <RightColumn>
          <Member>
            <MemberImg src={samProfile} />
            <MemberInfos>
              <Name>Brad</Name>
              <Linkedin>
                <Logo>
                  <AiOutlineLinkedin />
                </Logo>
                <ProfilePagesLinks href="" target="_blank"></ProfilePagesLinks>
              </Linkedin>
              <GitHub>
                <Logo>
                  <AiOutlineGithub />
                </Logo>
                <ProfilePagesLinks href="" target="_blank"></ProfilePagesLinks>
              </GitHub>
            </MemberInfos>
          </Member>
          <Member>
            <MemberImg src={samProfile} />
            <MemberInfos>
              <Name>Tommy</Name>
              <Linkedin>
                <Logo>
                  <AiOutlineLinkedin />
                </Logo>
                <ProfilePagesLinks href="" target="_blank"></ProfilePagesLinks>
              </Linkedin>
              <GitHub>
                <Logo>
                  <AiOutlineGithub />
                </Logo>
                <ProfilePagesLinks href="" target="_blank"></ProfilePagesLinks>
              </GitHub>
            </MemberInfos>
          </Member>
        </RightColumn>
      </TeamMemberContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bolder;
  font-size: 3rem;
  color: ${colorsSet.primary};
`;

const Description = styled.p`
  text-align: center;
  margin-top: 30px;
  font-style: italic;
  color: ${colorsSet.primaryHover};
  font-size: 1.3rem;
`;

const TeamMemberContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const ConcordiaLinkContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ConcordiaLink = styled.a`
  color: ${colorsSet.primaryHover};
  font-weight: bolder;
  font-size: 1.5rem;
`;

const LeftColumn = styled.div`
  margin-right: 40px;
`;

const RightColumn = styled.div``;

const Member = styled.div`
  min-width: 500px;
  border: 3px solid #15616d;
  border-radius: 10px;
  display: flex;
  padding: 25px;
  margin-top: 40px;
  box-shadow: 0px 10px 13px -7px #a5a5a5;
`;

const MemberImg = styled.img`
  width: 130px;
  border-radius: 50%;
`;

const MemberInfos = styled.div`
  margin-left: 10px;
`;

const Name = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  margin-right: 10px;
`;

const ProfilePagesLinks = styled.a`
  color: ${colorsSet.primary};
  font-weight: bolder;
`;

const Linkedin = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const GitHub = styled.div`
  margin-top: 10px;
  align-items: center;
  display: flex;
`;
