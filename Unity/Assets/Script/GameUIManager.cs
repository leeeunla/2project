using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SocialPlatforms.Impl;
using UnityEngine.UI;

public class GameUIManager : MonoBehaviour
{
    public GameObject mainImage;        // �̹����� ��Ƶδ� GameObject
    public Sprite gameOverSpr;          // GAME OVER �̹���
    public Sprite gameClearSpr;         // GAME CLEAR �̹���
    public GameObject panel;            // �г�
    public GameObject restartButton;    // RESTART ��ư
    public GameObject nextButton;       // NEXT ��ư
    Image titleImage;                   // �̹����� ǥ���ϰ��ִ� Image ������Ʈ

    // +++ �ð� ���� �߰� +++
    public GameObject timeBar;          // �ð� ǥ�� �̹��� 
    public GameObject timeText;         // �ð� �ؽ�Ʈ
    TimeController timeCnt;             // TimeController

    // +++ ���� �߰� +++
    public GameObject scoreText;        // ���� �ؽ�Ʈ  
    public static int totalScore;       // ���� ����
    public int stageScore = 0;          // �������� ����

    public GameObject inputUI;

    public GameObject scoreJump;

    // Start is called before the first frame update
    void Start()
    {
        // �̹��� �����
        Invoke("InactiveImage", 1.0f);
        // ��ư(�г�)�� �����
        panel.SetActive(false);

        // +++ �ð� ���� �߰� +++
        // TimeController ������
        timeCnt = GetComponent<TimeController>();
        if (timeCnt != null)
        {
            if (timeCnt.gameTime == 0.0f)
            {
                timeBar.SetActive(false);   // �ð� ������ ������ ����
            }
        }

        // +++ ���� ǥ�� +++
        UpdateScore();
    }

    // Update is called once per frame
    void Update()
    {
        if (PlayerController.gameState == "gameclear")
        {
            inputUI.SetActive(false);
            // ���� Ŭ����
            mainImage.SetActive(true); // �̹��� ǥ��
            panel.SetActive(true); // ��ư(�г�)�� ǥ��
            // RESTART ��ư ��ȿȭ 
            Button bt = restartButton.GetComponent<Button>();
            bt.interactable = false;
            mainImage.GetComponent<Image>().sprite = gameClearSpr;
            PlayerController.gameState = "gameend";

            // +++ �ð� ���� �߰� +++
            if (timeCnt != null)
            {
                timeCnt.isTimeOver = true; // �ð� ī��Ʈ ����

                // +++ ���� �߰� +++
                // ������ �Ҵ��Ͽ� �Ҽ��� ����
                /*           int time = (int)timeCnt.displayTime;
                           totalScore += time * 10;        // ���� �ð��� ������ ���Ѵ�.*/

            }

            // +++ ���� �߰� +++
            totalScore += stageScore;
            stageScore = 0;
            UpdateScore();// ������ UI�� �ݿ�
        }




        else if (PlayerController.gameState == "gameover")
        {
            inputUI.SetActive(false);
            // ���� ����
            mainImage.SetActive(true);      // �̹��� ǥ��
            panel.SetActive(true);          // ��ư(�г�)�� ǥ��
            // NEXT ��ư ��Ȱ��
            Button bt = nextButton.GetComponent<Button>();
            bt.interactable = false;
            mainImage.GetComponent<Image>().sprite = gameOverSpr;
            PlayerController.gameState = "gameend";

            // +++ �ð� ���� �߰� +++
            if (timeCnt != null)
            {
                timeCnt.isTimeOver = true; // �ð� ī��Ʈ ����
            }
        }
        else if (PlayerController.gameState == "playing")
        {
            // ���� ��
            GameObject player = GameObject.FindGameObjectWithTag("Player");
            // PlayerController ��������
            PlayerController playerCnt = player.GetComponent<PlayerController>();

            // +++ �ð� ���� �߰� +++
            // �ð� ����
            if (timeCnt != null)
            {
                if (timeCnt.gameTime > 0.0f)
                {
                    // ������ �Ҵ��Ͽ� �Ҽ��� ���ϸ� ����
                    int time = (int)timeCnt.displayTime;
                    // �ð� ����
                    timeText.GetComponent<Text>().text = time.ToString();
                    // Ÿ�� ����
                    if (time == 0)
                    {
                        playerCnt.GameOver();   // ���� ����
                    }
                }
            }


            // +++ ���� �߰� +++
            if (playerCnt.score != 0)
            {
                stageScore += playerCnt.score;
                playerCnt.score = 0;
                UpdateScore();
            }
        }

    }
    void InactiveImage()
    {
        mainImage.SetActive(false);
    }
    // +++ ���� �߰� +++
  void UpdateScore()
{
    int score = stageScore + totalScore;
    scoreText.GetComponent<Text>().text = score.ToString();

        scoreJump.GetComponent<Text>().text = score.ToString();

}


    public void Jump()
        {
        GameObject player = GameObject.FindGameObjectWithTag("Player");
        PlayerController playerCnt = player.GetComponent<PlayerController>();
        playerCnt.Jump();
    }
}
