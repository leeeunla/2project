using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Moving : MonoBehaviour
{
    public float moveX = 0.0f;          //X�̵��Ÿ�
    public float moveY = 0.0f;          //Y�̵��Ÿ�
    public float times = 0.0f;          //�ð�
    public float weight = 0.0f;         //���� �ð�
    public bool isMoveWhenOn = false;   //�ö� ſ�� �� �����̱�

    // public GameObject p_player;

    public bool isCanMove = true;       //������
    float perDX;                        //�������� �� X�̵� ��
    float perDY;                        //�������� �� Y�̵� ��
    Vector3 defPos;                     //�ʱ� ��ġ
    bool isReverse = false;             //���� ����

    // Start is called before the first frame update
    void Start()
    {
        //�ʱ� ��ġ
        defPos = transform.position;
        //�������ӿ� �̵��ϴ� �ð� 
        float timestep = Time.fixedDeltaTime;
        //�� �������� X �̵� ��
        perDX = moveX / (1.0f / timestep * times);
        //�� �������� Y �̵� ��
        perDY = moveY / (1.0f / timestep * times);

        if (isMoveWhenOn)
        {
            //ó���� �������� �ʰ� �ö� Ÿ�� �����̱� ����
            isCanMove = false;
        }
    }

    // Update is called once per frame
    void Update()
    {

    }
    private void FixedUpdate()
    {
        if (isCanMove)
        {
            //�̵���
            float x = transform.position.x;
            float y = transform.position.y;
            bool endX = false;
            bool endY = false;
            if (isReverse)
            {
                //�ݴ� ���� �̵�
                //�̵����� ����� �̵� ��ġ�� �ʱ� ��ġ���� �۰ų�
                //�̵����� ������ �̵� ��ġ�� �ʱ� ��ġ���� ū���
                if ((perDX >= 0.0f && x <= defPos.x) || (perDX < 0.0f && x >= defPos.x))
                {
                    //�̵����� +
                    endX = true;    //X ���� �̵� ����
                }
                if ((perDY >= 0.0f && y <= defPos.y) || (perDY < 0.0f && y >= defPos.y))
                {
                    endY = true;    //Y ���� �̵� ����
                }
                //��� �̵�
                transform.Translate(new Vector3(-perDX, -perDY, defPos.z));
            }
            else
            {
                //������ �̵�
                //�̵����� ����� �̵� ��ġ�� �ʱ� ��ġ���� ū�ų�
                //�̵����� ������ �̵� ��ġ�� �ʱ� + �̵��Ÿ� ���� ���� ���
                if ((perDX >= 0.0f && x >= defPos.x + moveX) || (perDX < 0.0f && x <= defPos.x + moveX))
                {
                    endX = true;    //X ���� �̵� ����
                }
                if ((perDY >= 0.0f && y >= defPos.y + moveY) || (perDY < 0.0f && y <= defPos.y + moveY))
                {
                    endY = true;    //Y ���� �̵� ����
                }
                //��� �̵�
                Vector3 v = new Vector3(perDX, perDY, defPos.z);
                transform.Translate(v);
            }

            if (endX && endY)
            {
                //�̵� ����
                if (isReverse)
                {
                    //��ġ�� ��߳��°��� �����ϱ� ���� ���� �����̵����� ���ư��� ���� �ʱ� ��ġ�� ����
                    transform.position = defPos;
                }
                isReverse = !isReverse; //���� ���� ��Ŵ
                isCanMove = false;      //�̵� ���� ���� false
                if (isMoveWhenOn == false)
                {
                    //�ö� ſ�� �� �����̴� ���� �����ִ� ���
                    Invoke("Move", weight);  // weight ��ŭ ���� �� �ٽ� �̵�
                }
            }
        }
    }

    //�̵��ϰ� �����
    public void Move()
    {
        isCanMove = true;
    }

    //�̵����� ���ϰ� �����
    public void Stop()
    {
        isCanMove = false;
    }

    //���� ����
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag == "Player")
        {
            Debug.Log("collision : " + collision);
            //�����Ѱ��� �÷��̾��� �̵� ����� �ڽ����� �����
            collision.transform.SetParent(transform);
            if (isMoveWhenOn)
            {
                //�ö����� �� �����̴� ���� 
                isCanMove = true;   //�̵��ϰ� �����
            }
        }
    }
    //���� ����
    private void OnCollisionExit2D(Collision2D collision)
    {
        if (collision.gameObject.tag == "Player")
        {
            //�����Ѱ��� �÷��̾��� �̵� ����� �ڽĿ��� ���ܽ�Ŵ
            collision.transform.SetParent(null);
        }
    }

}
